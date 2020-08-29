const express = require('express')
var bodyParser = require('body-parser')

const app = express()

// importing routes
const rutas = require('./routes/routes')

// settings
app.set('port', process.env.PORT || 3001)

// midleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routes
app.use('/', rutas)

// inicio de servidor
app.listen(app.get('port'), () => {
  console.log('Server on port 3001')
})

module.exports = app
