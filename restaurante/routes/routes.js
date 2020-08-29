const express = require('express')
const router = express.Router()
// generador de rutas

const controllers = require('../controllers/controllers')
// declaración de rutas para las acciones en el controlador
router.get('/', controllers.index)
router.post('/pedido', controllers.post_pedido)
router.get('/estado_ped', controllers.estado_ped)
router.get('/notify_rep', controllers.notify_rep)

// exportar modulo
module.exports = router
