const express = require('express')
const Item = require('../Models/item')
const multer = require('multer')
const sharp = require('sharp')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/items',auth,async (req, res) => {
     console.log(req);
    const item = new Item({
    ...req.body,
    owner: req.user._id
})
    try {
        await item.save()
        res.status(201).send(item)
    } catch (e) {
        res.status(400).send(e)
    }
})

//route to get filtered details
//will be decided where to structure later
router.get('/items', async (req, res) => {
    if(req.query.location)
    {
      match.location = req.query.location
    }
    if(req.query.category)
    {
      match.category = req.query.category
    }
    try {
      await req.user.populate({
        path: 'items',
        match
      }).executePopulate()
      res.send(req.user.items)
    }
      catch (e) {
      res.status(500).send()
  }
})




router.get('/items', async (req, res) => {
    try {
      if(typeof req.query.itemid !== 'undefined' && req.query.itemid !== null)
      {
        const items = await Item.findById(req.query.itemid)
        res.send(items)
      }
      else {
        const items = await Item.find({})
        res.send(items)
      }
    } catch (e) {
        res.status(500).send()
    }
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
  }}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
}
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
