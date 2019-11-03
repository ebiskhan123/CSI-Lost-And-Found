let express = require('express');
let router = new express.Router();
let locationServices = require('../services/locationServices')
let userServices = require('../services/userServices')


router.get('/api/cities', (request, response) => {
    locationServices.getCities().then((cities) => {
        response.status(200).send(cities)
    })
    .catch((error) => response.status(500).send(error))
})

router.post('/api/city', async (request, response) => {
    let loggedIn = await userServices.isAdminLoggedIn(request)
    if(loggedIn) {
        locationServices.addCity(request.body.name)
        .then((result) => {
            response.status(200).send()
        })
        .catch((error) => response.status(500).send(error))
    }
    else
        response.status(401).send('Unauthorized Access')
})

router.get('/api/areas/:cityId', (request, response) => {
    locationServices.getAreas(request.params.cityId)
    .then((areas) => response.status(200).send(areas))
    .catch((error) => response.status(500).send(error))
})

router.post('/api/area', async (request, response) => {
    let loggedIn = await userServices.isAdminLoggedIn(request)
    if(loggedIn) {
        locationServices.addArea(request.body)
        .then((result) => {
            response.status(200).send()
        })
        .catch((error) => response.status(500).send(error))
    }
    else
        response.status(401).send('Unauthorized Access')
})

router.delete('/api/area/:areaId', async (request, response) => {
    let loggedIn = await userServices.isAdminLoggedIn(request)
    if(loggedIn) {
        locationServices.deleteArea(request.params.areaId)
        .then((result) => response.status(200).send())
        .catch((error) => response.status(500).send(error))
    }
    else
        response.status(401).send('Unauthorized Access')
})

router.delete('/api/city/:cityId', async (request, response) => {
    let loggedIn = await userServices.isAdminLoggedIn(request)
    if(loggedIn) {
        locationServices.deleteCity(request.params.cityId)
        .then((result) => response.status(200).send())
        .catch((error) => response.status(500).send(error))
    }
    else
        response.status(401).send('Unauthorized Access')
})


module.exports = router