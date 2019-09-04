const express = require('express')
const User = require('../Models/user')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/api/signUp', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send()
    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
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

router.post('/api/logOut', auth, async (req, res) => {
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

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
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
