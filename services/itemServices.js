let Item = require('../Models/item')
let fs = require('fs');
let multer = require('multer');

module.exports.saveItem = async (request, response, user) => {
    return new Promise((resolve, reject) => {
        saveImageInDisk(request, response, () => {
            let itemObject = JSON.parse(request.body.item);
            itemObject.imageUrl = request.file.filename;
            itemObject.owner = user._id;
            let item = new Item({
                ...itemObject
            })
            item.save((error, data) => {
                if(error) {
                    reject(error)
                }
                else {
                    resolve(data)
                }
            });
        })
    })
}

module.exports.getAllItems = () => {
    return new Promise((resolve, reject) => {
        Item.find((error, data) => {
            if(error) {
                reject(error)
            }
            else {
                resolve(data)
            }
        })
    })
}

module.exports.getMyItems = (user) => {
    return new Promise((resolve, reject) => {
        Item.find({owner: user._id}, (error, data) => {
            if(error) {
                reject(error)
            }
            else {
                resolve(data)
            }
        })
    })
}

module.exports.getItem = (itemId) => {
    return new Promise((resolve, reject) => {
        Item.findById(itemId, (error, data) => {
            if(error) {
                reject(error)
            }
            else {
                resolve(data)
            }
        })
    })
}

module.exports.markAsResolved = (itemId) => {
    return new Promise((resolve, reject) => {
        Item.update( { _id: itemId }, { resolved: true }, (error, data) => {
            if(error) {
                reject(error);
            }
            else {
                resolve(data);
            }
        })
    })
}

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Views/images')
    },                    
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}.jpg`)
    }                     
  });  

const saveImage = multer({ storage: storage });

let saveImageInDisk = saveImage.single('image')

