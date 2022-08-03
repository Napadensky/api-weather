const controllers = require('../../controllers/controllers')
const route = require('express').Router()

/**
 * @swagger
 * /api/v1/location:
 *  get:
 *   tags:
 *     - Location
 *   description: Get the location of the user
 *   sumary: Get location by ip
 *   responses:
 *     '200':
 *      description: A successful response
 *      content:
 *      application/json:
 */
route.get('/location', controllers.getLocation)

/**
 * @swagger
 * /api/v1/current/{city}:
 *  get:
 *   tags:
 *     - current
 *   description: Get the location of the user
 *   sumary: Get location by ip
 *   parameters:
 *    - name: city
 *      in: path
 *      description: City name
 *   responses:
 *     '200':
 *      description: A successful response
 *      content:
 *      application/json:
 */
route.get('/current/:city?', controllers.getCurrentByCity)

/**
 * @swagger
 * /api/v1/forecast/{city}:
 *  get:
 *   tags:
 *     - forecast
 *   description: Get the location of the user
 *   sumary: Get location by ip
 *   parameters:
 *    - name: city
 *      in: path
 *      description: City name
 *   responses:
 *     '200':
 *      description: A successful response
 *      content:
 *      application/json:
 */
route.get('/forecast/:city?', controllers.getForecastByCity)

module.exports = route
