let User = require('../Models/user')
let fs = require('fs')

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