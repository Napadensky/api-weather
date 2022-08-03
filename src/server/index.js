// imports
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

// import local
const { myErrorHandler, notFoundHandler } = require('../errors')
const routers = require('../routers')

// instance express
const app = express()
app.set('port', process.env.PORT || 3000)

const swaggerSpec = swaggerJsDoc({
  definition: { openapi: '3.0.0' },
  info: { title: 'Weather API', version: '1.0.0' },
  servers: [{ url: 'http://localhost:3000' }],
  apis: [path.join(__dirname.replace('server', 'routers/v1/*.js'))]
})

// Middleware
app.use(express.json())
app.use(morgan('dev'))
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(cors())

// Routes
app.use('/api', routers.v1)

// Not Found Handler
app.use(notFoundHandler)

// Error Handler
app.use(myErrorHandler)

module.exports = { app }
