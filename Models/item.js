const mongoose = require('mongoose')
const validator = require('validator')

const categories = ['Bags/Luggages and Wallets',
 'Keys',
 'Documents and Cards',
 'Phone or Tablet', 
 'Clothes, Jewels and Wearables',
 'Books and Study Materials',
 'Vehicle and Accessories', 
 'Electronic Items', 
 'Sports and Fitness Items', 
 'Others']

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    },
category: {
      type: String,
      enum: categories,
      required: true,
      trim: true,
  },
  location: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Area'
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  date:{
      type: Date
  },
  requestLogs: {
      type: [{}],
  },
  lostOrFound:{
    type: String,
    required: true,
    trim: true,
  },
  resolved:{
    type: Boolean,
    required: true,
    default: false
  },
  tags: {
      type: [String]
  },
  owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
  },
  imageUrl: {
      type: String
  }
},
{
    timestamps :true
})

  ItemSchema.methods.toJSON = function () {
      const item = this
      const itemObject = item.toObject()
      return itemObject
  }

const Item = mongoose.model('Item', ItemSchema)

module.exports.Item = Item

module.exports.categories = categories


// const ne = new Item({
//   name:"ebby",
//   email:"ebbygmail.com",
//   category:"phone",
//   location:"Tambaram",
//   description :"Lorem ipsum dolor sit amet"
// })

// ne.save().then(() =>{
//   console.log(ne);
// }).catch((error) => {
//   console.log(error);
// })
