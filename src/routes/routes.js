const express = require('express')
const router = express.Router()
// generador de rutas

const controllers = require('../controllers/controllers')
// declaración de rutas para las acciones en el controlador
router.get('/', controllers.index)

router.get('/cliente/pedido', controllers.make_pedido)
router.get('/cliente/verify_res', controllers.verify_res)
router.get('/cliente/verify_rep', controllers.verify_rep)

router.get('/restaurante/status_ready', controllers.set_ready)

router.get('/repartidor/status_delivered', controllers.set_delivered)

// exportar modulo
module.exports = router
