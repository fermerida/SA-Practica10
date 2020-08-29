var request = require('request')
const controller = {}


// carga de index y renderización de pagina principal
controller.index = function (req, res) {
  var message = ''
  //res.render('home', { message: message })
  res.send('repartidor home')
  console.log("Index")
}

controller.pedido = function (req, res) {
  var bdytxt = '{ "id_rep":4444, "id_ped":3333, "id_res":2222}'
  var body = JSON.parse(bdytxt)
  res.json(body)
  console.log("made pedido")
}

controller.estado_ped = function (req, res) {
  var bdytxt = '{ "id_rep":4444, "id_cli":1111, "id_ped":3333}'
  var body = JSON.parse(bdytxt)
  res.json(body)
  console.log("Cambiando el estatus del pedido a entregado")
}

controller.set_entregado = function (req, res) {
  var bdytxt = '{ "id_rep":4444, id_ped":3333}'
  var body = JSON.parse(bdytxt)
  res.json(body)
  console.log("made pedido")
}


module.exports = controller
