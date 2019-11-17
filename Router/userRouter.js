const express = require('express')
const User = require('../Models/user')
const router = new express.Router()
const auth = require('../middleware/auth')
const userServices = require('../services/userServices')

router.post('/api/signUp', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send()
    } catch (e) {
        if(e.errmsg.includes("duplicate"))
            res.status(400).send({message: "Account already exists"})
        else
            res.status(500).send("An error occured")
    }
})

router.get('/api/user/:userId/:resetToken', (request, response) => {
    userServices.getUser(request.params.userId)
    .then((user) => {
        if(user.passwordResetToken.token === request.params.resetToken)
            {
                response.send({name: user.name})
            }
        else
            response.status(400).send('Broken reset link')
    })
    .catch((error) => response.status(400).send(error))
})


router.post('/api/user/:userId/:resetToken', (request, response) => {
    userServices.getUser(request.params.userId)
    .then((user) => {
        if(user.passwordResetToken.token === request.params.resetToken)
            {
                userServices.changePassword(user, request.body.password.password)
                .then((data) => response.status(200).send())
                .catch(error => response.status(500).send(error))
            }
        else
            response.status(400).send('Broken reset link')
    })
    .catch((error) => response.status(400).send(error))
})


router.post('/api/resetPassword', (request, response) => {
    userServices.getUserByEmail(request.body.email)
    .then(user => {
        userServices.sendPasswordResetEmail(user)
        .then(result => response.status(200).send())
        .catch(error => resopnse.status(500).send(error))
    })
    .catch((error) => response.status(400).send(error))
})

router.post('/api/signIn', async (req, res) => {
    try {
        let user = await User.findByCredentials(req.body.email, req.body.password)
        let tokens = await user.generateAuthToken()
        res.send(tokens)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/api/logOut', async (req, res) => {
    res.status(200).send();
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/api/user/:userId', async (request, response) => {
    let loggedIn = await userServices.isAdminLoggedIn(request)
    if(loggedIn) {
        userServices.getUser(request.params.userId)
        .then(user => {
            delete user['password']
            delete user['passwordResetToken']
            response.send(user)
        })
    }
    else
        response.status(401).send('Unauthorized access')
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

router.get('/api/admin/isLoggedIn', (request, response) => {
    userServices.isAdminLoggedIn(request)
    .then((result) => response.send(result))
    .catch((error) => {
        console.log(error)
        response.status(500).send(error)
    })
})

router.post('/api/admin/logIn', (request, response) => {
    if(request.body.password == "csie2019")
        response.cookie('adm', 'NFn09wnq0bHNF14bH4BFb05bFB2Bsgsb', {maxAge: 3600000, httpOnly: true}).send()
    else
        response.send('WrongPassword')
})


router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password' ]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router
