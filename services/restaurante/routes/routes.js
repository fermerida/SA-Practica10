const express = require('express')
const router = express.Router()
// generador de rutas

const controllers = require('../controllers/controllers')
// declaración de rutas para las acciones en el controlador
router.get('/', controllers.index)
router.get('/pedido', controllers.pedido)
router.get('/estado_ped', controllers.estado_res)
router.get('/notify_rep', controllers.estado_rep)

// exportar modulo
module.exports = router
