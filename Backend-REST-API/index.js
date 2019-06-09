const express = require('express')
const Item = require('./Models/item')
require('./db/mongoose')

const userRouter = require('./Router/user')
const itemRouter = require('./Router/item')
//const foundRouter = require('./Router/found')


const app = express()
const port = process.env.PORT || 3000

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

app.use(itemRouter)
app.use(userRouter)



//app.use(foundRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
