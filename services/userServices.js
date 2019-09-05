let User = require('../Models/user')

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
