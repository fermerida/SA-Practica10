var request = require('request')
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
  res.json(bodyJ)
  var writing = 'Cliente ' + bodyJ.id_cli + ': Realizo un pedido\n'
  fs.appendFile('../log.txt', writing, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err
    // success case, the file was saved
    console.log('Escribi en archivo')
  })
  request({
    url: 'http://localhost:3002/pedido',
    method: 'POST',
    body: bodyJ,
    json: true
  }, function (error, response) {
    // res is the response object, and it passes info back to client side
    if (error) {
      throw (error)
    } else {
      var message = 'Creado Satisfactoriamente'
      console.log(message)
    }
  })
}
controller.estado_res = function (req, res) {
  var bdytxt = '{ "id_cli":1111, "id_ped":3333, "id_res":2222}'
  var bodyJ = JSON.parse(bdytxt)
  res.json(bodyJ)
  console.log('Estado restaurante consultado')
  var writing = 'Cliente ' + bodyJ.id_cli + ': Realice una consulta al restaurante\n'
  fs.appendFile('../log.txt', writing, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err
    // success case, the file was saved
    console.log('Made pedido')
  })
  request({
    url: 'http://localhost:3002/estado_ped',
    method: 'GET',
    body: bodyJ,
    json: true
  }, function (error, response) {
    // res is the response object, and it passes info back to client side
    if (error) {
      throw (error)
    } else {
      var wrt = 'Cliente: Su pedido esta siendo preparado\n'
      fs.appendFile('../log.txt', wrt, (err) => {
        if (err) throw err
      })
    }
  })
}

controller.estado_rep = function (req, res) {
  var bdytxt = '{ "id_cli":1111, "id_ped":3333, "id_rep":4444}'
  var bodyJ = JSON.parse(bdytxt)
  res.json(bodyJ)
  console.log('Estado repartidor consultado')
  var writing = 'Cliente ' + bodyJ.id_cli + ': Realicé una consulta al repartidor\n'
  fs.appendFile('../log.txt', writing, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err
    // success case, the file was saved
    console.log('Made pedido')
  })
  request({
    url: 'http://localhost:3003/estado_ped',
    method: 'GET',
    body: bodyJ,
    json: true
  }, function (error, response) {
    // res is the response object, and it passes info back to client side
    if (error) {
      throw (error)
    } else {
      var wrt = 'Cliente: Su pedido se encuentra en camino\n'
      fs.appendFile('../log.txt', wrt, (err) => {
        if (err) throw err
      })
    }
  })
}

module.exports = controller
