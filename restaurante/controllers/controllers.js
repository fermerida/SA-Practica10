const controller = {}
const fs = require('fs')

// carga de index y renderización de pagina principal
controller.index = function (req, res) {
  // res.render('home', { message: message })
  res.send('cliente home')
  console.log('Index')
}

controller.post_pedido = function (req, res) {
  var writing = 'Restaurante: Recibi un pedido del cliente '
  writing += req.body.id_cli + '\n'
  writing += 'Restaurante: Se empieza a preparar el pedido: ' + req.body.pedido + '\n'

  fs.appendFile('../log.txt', writing, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err
    // success case, the file was saved
    console.log('Recibio pedido')
  })
  res.send('Ok')
}

controller.estado_ped = function (req, res) {
  var writing = 'Restaurante: Su pedido ' + req.body.id_ped + ' esta siendo preparado\n'

  fs.appendFile('../log.txt', writing, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err
    // success case, the file was saved
    console.log('Recibio pedido')
  })
  res.send('En preparación')
}

controller.notify_rep = function (req, res) {
  var bdytxt = '{ "id_ped":3333, "id_rep":4444,"pedido":"pizza","id_res":2222, "Estado":"Listo para recoger"}'
  var bodyJ = JSON.parse(bdytxt)
  var writing = 'Restaurante: Repartidor ' + req.body.id_rep + ' El pedido esta listo\n'
  fs.appendFile('../log.txt', writing, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err
    // success case, the file was saved
    console.log('Recibio pedido')
  })
  res.json(bodyJ)
}

module.exports = controller
