let express = require('express');
let router = new express.Router();
let locationServices = require('../services/locationServices')

router.get('/api/cities', (request, response) => {
    locationServices.getCities().then((cities) => {
        response.status(200).send(cities)
    })
    .catch((error) => response.status(500).send(error))
})

router.post('/api/city', (request, response) => {
    locationServices.addCity(request.body.name)
    .then((result) => {
        response.status(200).send()
    })
    .catch((error) => response.status(500).send(error))
})

router.get('/api/areas/:cityId', (request, response) => {
    locationServices.getAreas(request.params.cityId)
    .then((areas) => response.status(200).send(areas))
    .catch((error) => response.status(500).send(error))
})

router.post('/api/area', (request, response) => {
    locationServices.addArea(request.body)
    .then((result) => {
        response.status(200).send()
    })
    .catch((error) => response.status(500).send(error))
})

router.delete('/api/area/:areaId', (request, response) => {
    locationServices.deleteArea(request.params.areaId)
    .then((result) => response.status(200).send())
    .catch((error) => response.status(500).send(error))
})

router.delete('/api/city/:cityId', (request, response) => {
    locationServices.deleteCity(request.params.cityId)
    .then((result) => response.status(200).send())
    .catch((error) => response.status(500).send(error))
})


module.exports = router