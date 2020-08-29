const express = require('express')
const router = express.Router()
// generador de rutas

const controllers = require('../controllers/controllers')
// declaración de rutas para las acciones en el controlador
router.get('/', controllers.index)

router.get('/cliente/pedido', controllers.index)
router.get('/cliente/verify_res', controllers.index)
router.get('/cliente/verify_rep', controllers.index)

router.get('/restaurante/pedido', controllers.index)
router.get('/restaurante/status_pedido', controllers.index)
router.get('/restaurante/status_ready', controllers.index)

router.get('/repartidor/pedido', controllers.index)
router.get('/repartidor/status_pedido', controllers.index)
router.get('/repartidor/status_delivered', controllers.index)


// exportar modulo
module.exports = router
