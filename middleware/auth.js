const jwt = require('jsonwebtoken')
const User = require('../Models/user')
const mongoose = require('mongoose')


const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        //console.log(token)
        const decodedtoken = jwt.verify(token, 'aswinmountain')
        const user = await User.findOne({_id: decodedtoken._id, 'tokens.token': token  })
        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth
//,
