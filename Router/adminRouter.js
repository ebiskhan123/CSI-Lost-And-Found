let userServices = require('../services/userServices')
let path = require('path')

module.exports = (app) => {
    app.get('/admin', (req, res) => {
        res.sendFile(path.resolve('Admin/admin.html'))
    })
    
    app.get('/admin/cities', async (req, res) => {
        let loggedIn  = await userServices.isAdminLoggedIn(req)
        if(loggedIn) {
            res.sendFile(path.resolve('Admin/cities.html'))
        }
        else
            sendBlankPage(res)
    })

    app.get('/admin/items', async (req, res) => {
        let loggedIn  = await userServices.isAdminLoggedIn(req)
        if(loggedIn) {
            res.sendFile(path.resolve('Admin/items.html'))
        }
        else
            sendBlankPage(res)
    })

    app.get('/admin/users', async (req, res) => {
        let loggedIn  = await userServices.isAdminLoggedIn(req)
        if(loggedIn) {
            res.sendFile(path.resolve('Admin/users.html'))
        }
        else
            sendBlankPage(res)
    })
    
}

const sendBlankPage = (response) => {
    response.send('No such page')
}