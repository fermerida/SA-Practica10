var request = require('request')
const controller = {}


// carga de index y renderización de pagina principal
controller.index = function (req, res) {
  var message = ''
  //res.render('home', { message: message })
  res.send('cliente home')
  console.log("Index")
}

controller.pedido = function (req, res) {
  var message = ''
  //res.render('home', { message: message })
  console.log("Index")
}

controller.estado_res = function (req, res) {
  var message = ''
  //res.render('home', { message: message })
  console.log("Index")
}

controller.estado_rep = function (req, res) {
  var message = ''
  //res.render('home', { message: message })
  console.log("Index")
}


module.exports = controller
