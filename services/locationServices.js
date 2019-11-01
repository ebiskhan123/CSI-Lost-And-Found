const locationModel = require('../Models/area')
const Area = locationModel.Area;
const City = locationModel.City;

module.exports.getCities = () => {
    return new Promise((resolve, reject) => {
        City.find((error, data) => {
            if(error)
                reject(error)
            resolve(data);        
        })
    })
}

module.exports.getAreas = (cityId) => {
    return new Promise((resolve, reject) => {
        Area.find({city: cityId}, (error, data) => {
            if(error)
                reject(error)
            resolve(data)
        })
    })
}

module.exports.deleteArea = (areaId) => {
    return new Promise((resolve, reject) => {
        Area.remove({_id:areaId}, (error, result) => {
            if(error) 
                reject(error)
            resolve(result)
        })
    })
}

module.exports.deleteCity = (cityId) => {
    return new Promise((resolve, reject) => {
        City.remove({_id:cityId}, (error, result) => {
            if(error) 
                reject(error)
            resolve(result)
        })
    })
}

module.exports.updateCityName = (cityId, name) => {
    return new Promise((resolve, reject) => {
        City.update({_id: cityId}, {name: name}, (error, data) => {
            if(error)
                reject(error)
            resolve(data)
        })
    })
}

module.exports.updateAreaName = (areaId, name) => {
    return new Promise((resolve, reject) => {
        Area.update({_id: areaId}, {name: name}, (error, data) => {
            if(error)
                reject(error)
            resolve(data)
        })
    })
}

module.exports.addCity = (name) => {
    let city = new City({name: name})
    return new Promise((resolve, reject) => {
        city.save((error, data) => {
            if(error)
                reject(error)
            resolve(data)
        })        
    })
}

module.exports.addArea = (areaObject) => {
    let area = new Area({ ...areaObject })
    return new Promise((resolve, reject) => {
        area.save((error, data) => {
            if(error)
                reject(error)
            resolve(data)
        })        
    })
}