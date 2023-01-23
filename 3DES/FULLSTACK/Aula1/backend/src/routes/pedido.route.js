const express = require('express')
const router = express.Router()

const pedido = require('../controllers/pedido.controllers.js')

router.get('/pedido', pedido.readAll)


module.exports = router;