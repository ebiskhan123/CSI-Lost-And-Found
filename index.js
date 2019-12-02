const express = require('express')
const Item = require('./Models/item')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const https = require('https')
const fs = require('fs')

const privateKey  = fs.readFileSync('lostfoundtn.key', 'utf8')
const certificate = fs.readFileSync('lostfoundtn.com/3a7b495daa069186.crt', 'utf8')
const credentials = {key: privateKey, cert: certificate}

require('./db/mongoose')

const userRouter = require('./Router/userRouter')
const itemRouter = require('./Router/itemRouter')
const locationRouter = require('./Router/locationRouter')
const adminRouter = require('./Router/adminRouter')

const app = express()
const port = process.env.PORT || 3000

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

adminRouter(app)
app.use(itemRouter)
app.use(userRouter)
app.use(locationRouter)

app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/Views'));
//app.use(express.static(__dirname + '/Admin'));

app.get('/test', function(req, res) {
    res.sendFile('views/test.html', {root: __dirname })
});





app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  })


let server = https.createServer(credentials, app)

server.listen(port, () => {
    console.log('Server is up on port ' + port)
})
