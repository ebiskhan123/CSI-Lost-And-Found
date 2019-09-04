const jwt = require('jsonwebtoken')
const User = require('../Models/user')
const mongoose = require('mongoose')


const auth = (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            const token = req.header('Authorization').replace('Bearer ', '')
            const decodedtoken = jwt.verify(token, 'aswinmountain')
            const user = await User.findOne({_id: decodedtoken._id})
            if (!user) {
                res.status(401).send('Unauthorized Access')
            }
            resolve(user);
        }
        catch (error) {
            res.status(401).send('No Token Found')
        }
    })
}

module.exports = auth
//,
