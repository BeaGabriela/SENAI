const express = require('express')
const router = express.Router()

const pedido = require('../controllers/pedido.controllers.js')

router.get('/pedido', pedido.readAll)
router.post('/pedidoNew', pedido.createNew)
router.put('/horaEntrega', pedido.updateHora_e)
router.put('/horaFim', pedido.updateHora_fim)


module.exports = router;