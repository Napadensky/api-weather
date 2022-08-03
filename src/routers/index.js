const routerV1 = require('./v1/routers')
const route = require('express').Router()

const v1 = route.use('/v1', routerV1)

module.exports = { v1 }
