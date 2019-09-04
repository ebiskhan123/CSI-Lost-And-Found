const express = require('express')
const Item = require('./Models/item')
const multer = require('multer')

require('./db/mongoose')

const userRouter = require('./Router/userRouter')
const itemRouter = require('./Router/itemRouter')


const app = express()
const port = process.env.PORT || 3000

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(itemRouter)
app.use(userRouter)

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/Views'));

app.get('/test', function(req, res) {
    res.sendFile('views/test.html', {root: __dirname })
});

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  })

//app.use(foundRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
