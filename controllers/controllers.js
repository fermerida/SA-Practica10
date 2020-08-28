var request = require('request')
const controller = {}
var distance = require('../services/cliente/cliente');


// carga de index y renderización de pagina principal
controller.index = function (req, res) {
  var message = ''
  //res.render('home', { message: message })
  console.log("Index")
}


module.exports = controller
