let ItemModel = require('../Models/item')
let Item = ItemModel.Item
let fs = require('fs');
let multer = require('multer');
let mailer = require('../lib/mailing/mailer');
let UserServices = require('./userServices');

module.exports.saveItem = async (request, response, user) => {
    return new Promise((resolve, reject) => {
        saveImageInDisk(request, response, () => {
            let itemObject = JSON.parse(request.body.item);
            itemObject.imageUrl = 'no-image.jpg'
            if(request.file)
                itemObject.imageUrl = request.file.filename
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

module.exports.getItemCategories = () => {
    return ItemModel.categories;
}

module.exports.getItems = (filters) => {
    return new Promise((resolve, reject) => {
        Item.find({...filters}).populate({path: 'location', populate:{path: 'city'}})
        .exec((error, data) => {
            if(error) {
                reject(error)
            }
            else {
                resolve(data)
            }
        })
    })
}

module.exports.claimItem = (itemId, message, claimer) => {
    return new Promise((resolve, reject) => {
        this.getItem(itemId)
        .then((item) => {
            UserServices.getUser(item.owner)
            .then((owner) => {
                mailer.sendItemClaimRequestMail(owner, claimer, item, message)
                .then((info) => {
                    addRequestLog(item, message, claimer)
                    .then((data) => {
                        resolve(data)
                    })
                    .catch((error) => reject(error))
                })
                .catch((error) => reject(error))
            })
            .catch((error) => reject(error))
        })
        .catch((error) => reject(error))        
    })
}

module.exports.foundItem = (itemId, message, claimer) => {
    return new Promise((resolve, reject) => {
        this.getItem(itemId)
        .then((item) => {
            UserServices.getUser(item.owner)
            .then((owner) => {
                mailer.sendItemFoundMail(owner, claimer, item, message)
                .then((info) => {
                    addRequestLog(item, message, claimer)
                    .then((data) => {
                        resolve(data)
                    })
                    .catch((error) => reject(error))
                })
                .catch((error) => reject(error))
            })
            .catch((error) => reject(error))
        })
        .catch((error) => reject(error))        
    })
}

module.exports.getAllItems = () => {
    return new Promise((resolve, reject) => {
        Item.find().populate({path: 'location', populate:{path: 'city'}})
        .exec((error, data) => {
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
        Item.find({owner: user._id}).populate({path: 'location', populate:{path: 'city'}})
        .exec((error, data) => {
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

let addRequestLog = (item, message, claimer) => {
    item.requestLogs.push({ date: Date.now(), message: message, claimer: claimer.id })
    return new Promise((resolve, reject) => {
        item.save((error, data) => {
            if(error) {
                reject(error)
            }
            else {
                resolve(data)
            }
        })
    })
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Views/images')
    },                    
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}.jpg`)
    }                     
  });  

const saveImage = multer({ storage: storage });

const saveImageInDisk = saveImage.single('image')

