var request = require('request')
const controller = {}
const fs = require('fs')

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
  var bdytxt = '{ "id_cli":1111, "pedido":"Pizza", "id_res":2222}'
  var body = JSON.parse(bdytxt)
  res.json(body)
  fs.appendFile('../log.txt','Realice un pedido', (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;
    // success case, the file was saved
    console.log('Made pedido');
})
}

controller.estado_res = function (req, res) {
  var bdytxt = '{ "id_cli":1111, "id_ped":3333, "id_res":2222}'
  var body = JSON.parse(bdytxt)
  res.json(body)
  console.log("Estado restaurante consultado")
}

controller.estado_rep = function (req, res) {
  var bdytxt = '{ "id_cli":1111, "id_ped":3333, "id_rep":4444}'
  var body = JSON.parse(bdytxt)
  res.json(body)
  console.log("Estado repartidor consultado")
}


module.exports = controller
