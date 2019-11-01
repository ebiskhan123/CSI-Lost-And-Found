const mongoose = require('mongoose')

const AreaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'City'
    }
})

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const City = mongoose.model('City', CitySchema)
const Area = mongoose.model('Area', AreaSchema)

module.exports.City = City;
module.exports.Area = Area;