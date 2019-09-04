const express = require('express')
const multer = require('multer')
const sharp = require('sharp')
const auth = require('../middleware/auth')
const path = require('path');
let itemServices = require('../services/itemServices');
const router = new express.Router()

router.post('/api/item', async (req, res) => {
    auth(req).then((user) => {
        itemServices.saveItem(req, res, user)
        .then((data) => {
            res.status(200).send();
        })
        .catch((error) => {
            res.status(500).send(error);
        })
    })
    .catch((error) => {
        res.status(401).send("Unauthorized access");
    })
})

router.get('/image/:imageName', (request, response) => {
    response.sendFile(path.resolve(`./views/images/${request.params.imageName}`))
})

router.get('/api/items', async (req, res) => {
    itemServices.getAllItems()
    .then((items) => {
        res.send(items);
    })
    .catch((error) => {
        res.status(500).send(error);
    })
})

router.post('/api/claimItem/:itemId', (request, response) => {

})

router.post('/api/foundTheItem/:itemId', (request, response) => {
    
})

router.patch('/api/resolveItem/:itemId', (request, response) => {
    auth(request, response)
    .then((user) => {
        itemServices.getItem(request.params.itemId)
        .then((item) => {
            if(item.owner === user._id) {
                itemServices.markAsResolved(item._id)
                .then((data) => response.status(200).send())
                .catch((error) => response.status(500).send(error))
            }
            else {
                response.status(401).send('Unauthorized Access');
            }
        })
        .catch((error) => {
            response.status(500).send(error);
        })
    })
})

router.get('/api/myItems', async (req, res) => {
    auth(req).then((user) => {
        itemServices.getMyItems(user)
        .then((items) => {
            res.send(items);
        })
        .catch((error) => {
            res.status(500).send(error);
        })
    })
    .catch((error) => {
        res.status(401).send("Unauthorized access");
    })
})

router.patch('/items', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['category', 'location','description']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    try {
        const item = await Item.findByIdAndUpdate(req.query.itemid, req.body, { new: true, runValidators: true })
        if (!item) {
            return res.status(404).send()
        }
        res.send(item)
    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
})

router.delete('/items', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.query.itemid)
        if (!item) {
            res.status(404).send()
        }
        res.send(item)
    } catch (e) {
        res.status(500).send()
    }
})



router.get('/items/:lostorfound', async (req, res) => {
    const lostorfound = req.params.lostorfound
    try {
        const items = await Item.find({"lostorfound":lostorfound})
        res.send(items)
    } catch (e) {
        res.status(500).send()
    }
})

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }

        cb(undefined, true)
    }
})

router.post('/items/me/picture', auth, upload.single('picture'), async (req, res) => {
  try {
    const buffer = await sharp(req.file.buffer).resize({ width: 200, height: 200 }).png().toBuffer()
    console.log(buffer)
    let id= req.body._id;
   const item = await Item.findByIdAndUpdate(id, { $set: { picture : buffer } } , { new: true, runValidators: true })

    res.send(item)
  } catch (e) {
    console.log(e);
  }}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
}
)

router.delete('/items/me/picture', auth, async (req, res) => {
  try {
    let id= req.body._id;
   const item = await Item.findByIdAndUpdate(id, { $set: { picture : undefined } } , { new: true, runValidators: true })
    res.send("Picture deleted")
  } catch (e) {
    console.log(e);
  }
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// }
})

router.get('/items/:id/picture', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)

        if (!item || !item.picture) {
            throw new Error()
        }

        res.set('Content-Type', 'image/png')
        res.send(item.picture)
    } catch (e) {
        res.status(404).send()
    }
})

module.exports = router
