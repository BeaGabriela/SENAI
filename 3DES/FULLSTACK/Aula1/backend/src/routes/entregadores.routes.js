const express = require('express')
const router = express.Router()


const entregadores = require('../controllers/entregador.controller.js')

router.get('/entregadores', entregadores.readAll)
router.get('/entregadores/:id_entregador', entregadores.raedEntregadorId)
router.post('/entregadoresLogin', entregadores.raedEntregador)
router.post('/entregadores', entregadores.createNew)


module.exports = router;