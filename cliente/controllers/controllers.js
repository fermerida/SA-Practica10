const controller = {}
const fs = require('fs')

// carga de index y renderización de pagina principal
controller.index = function (req, res) {
  // res.render('home', { message: message })
  res.send('cliente home')
  console.log('Index')
}

controller.get_pedido = function (req, res) {
  // res.render('home', { message: message })
  var bdytxt = '{ "id_cli":1111, "pedido":"Pizza", "id_res":2222}'
  var bodyJ = JSON.parse(bdytxt)
  var writing = 'Cliente ' + bodyJ.id_cli + ': Realizo un pedido\n'
  fs.appendFile('../log.txt', writing, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err
    // success case, the file was saved
    console.log('Escribi en archivo')
  })
  res.json(bodyJ)
}

controller.estado_res = function (req, res) {
  var bdytxt = '{ "id_cli":1111, "id_ped":3333, "id_res":2222}'
  var bodyJ = JSON.parse(bdytxt)
  console.log('Estado restaurante consultado')
  var writing = 'Cliente ' + bodyJ.id_cli + ': Realice una consulta al restaurante\n'
  fs.appendFile('../log.txt', writing, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err
    // success case, the file was saved
    console.log('Made pedido')
  })
  res.json(bodyJ)
}

controller.estado_rep = function (req, res) {
  var bdytxt = '{ "id_cli":1111, "id_ped":3333, "id_rep":4444}'
  var bodyJ = JSON.parse(bdytxt)
  console.log('Estado repartidor consultado')
  var writing = 'Cliente ' + bodyJ.id_cli + ': Realicé una consulta al repartidor\n'
  fs.appendFile('../log.txt', writing, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err
    // success case, the file was saved
    console.log('Made pedido')
  })
  res.json(bodyJ)
}

module.exports = controller
