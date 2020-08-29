const express = require('express')
const router = express.Router()
// generador de rutas

const controllers = require('../controllers/controllers')
// declaración de rutas para las acciones en el controlador
router.get('/', controllers.index)
router.get('/pedido', controllers.get_pedido)
router.get('/estado_res', controllers.estado_res)
router.get('/estado_rep', controllers.estado_rep)

// exportar modulo
module.exports = router
