let User = require('../Models/user')
let fs = require('fs')
const jwt = require('jsonwebtoken')
let mailer = require('../lib/mailing/mailer')

module.exports.getUser = (userId) => {
    return new Promise((resolve, reject) => {
        User.findById(userId, (error, user) => {
            if(error) {
                reject(error)
            }
            else {
                resolve(user)
            }
        })
    })
}

module.exports.changePassword = (user, password) => {
    user.password = password
    delete user['passwordResetToken']
    return new Promise((resolve, reject) => {
        user.save((error, data) => {
            if(error)
                {
                    reject(error)
                }
            resolve(data)
        })
    })
}

module.exports.sendBulkEmail = (message) => {
    return new Promise((reslove, reject) => {
        getAllUsers().then((users) => {
            users.forEach(user => {
                mailer.mailUser(user, message)
                .then((result) => console.log(result))
                .catch((error) => console.log(error))
            })
            resolve()
        })
    })
}

module.exports.sendVerificationEmail = (user) => {
    user.emailVerificationToken = generateRandomString(40)
    return new Promise((resolve, reject) => {
        user.save((error) => {
            if(error)
                reject(error)
            mailer.sendEmailVerificationLink(user)
            .then(() => resolve())
            .catch((error) => reject(error))
        })
    })
}

getAllUsers = () => {
    return new Promise((resolve, reject) => {
        User.find({}, (error, data) => {
            if(error)
                reject(error)
            resolve(data)
        })
    })
}

module.exports.sendPasswordResetEmail = (user) => {
    let resetToken = generatePasswordResetCode()
    user.passwordResetToken = resetToken
    return new Promise((resolve, reject) => {
        user.save((error, data) => {
            if(error)
                {
                    reject(error)
                }
            mailer.sendPasswordResetLink(user)
            .then(data => resolve(data))
            .catch((error) => reject(error))      
        })
    })
}

module.exports.getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        User.findOne({email: email}, (error, user) => {
            if(error)
                reject(error)
            resolve(user)
        })
    })
}

generatePasswordResetCode = () => {
    return {token: generateRandomString(40), expires: Date.now() + 3600000}
}

generateRandomString = (length) => {
    let charCodes = []
    for(let i = 0; i < length; i++)
        {
            let code = 48 + Math.floor(61 * Math.random())
            if(code > 57)
                code = code + 7
            if(code > 90)
                code = code + 6
            charCodes.push(code)
        }
    return String.fromCharCode(...charCodes)
}

module.exports.isAdminLoggedIn = (request) => {
    return new Promise((resolve, reject) => {
        getAdminData().then((admin) => {
            if(request.cookies.adm === admin.cookie)
                resolve(true)
            resolve(false)
        })
        .catch((error) => reject(error))
    })
}


const getAdminData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./admin.json', (error, data) => {
            if(error)
                reject(error)
            resolve(JSON.parse(data))
        })    
    })
}