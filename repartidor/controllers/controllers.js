const controller = {}
const fs = require('fs')

// carga de index y renderización de pagina principal
controller.index = function (req, res) {
  // res.render('home', { message: message })
  res.send('repartidor home')
  console.log('Index')
}

controller.pedido = function (req, res) {
  var writing = 'Repartidor 4444: Recibi un pedido del restaurante '
  writing += req.body.id_res + '\n'
  writing += 'Repartidor 4444: Comienzo a llevar el pedido: ' + req.body.pedido

  fs.appendFile('../log.txt', writing, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err
    // success case, the file was saved
    console.log('Recibio pedido')
  })
  res.send('Ok')
}

controller.estado_ped = function (req, res) {
  var writing = 'Repartidor 4444: Verificando estado del pedido '
  writing += req.body.id_ped + '\n'
  writing += 'Repartidir 4444: Su pedido se encuentra en camino\n'

  fs.appendFile('../log.txt', writing, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err
    // success case, the file was saved
    console.log('Recibio pedido')
  })
  res.send('Ok')
}

controller.set_entregado = function (req, res) {
  var writing = 'Repartidor 4444: Pedido entregado número 3333\n'
  fs.appendFile('../log.txt', writing, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err
    // success case, the file was saved
    console.log('Recibio pedido')
  })
  res.send('Ok')
}

module.exports = controller
