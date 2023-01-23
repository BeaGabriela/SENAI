const express = require('express')
const router = express.Router()


const entregadores = require('../controllers/entregador.controller.js')

router.get('/entregadores', entregadores.readAll)
router.post('/entregadores', entregadores.createNew)


module.exports = router;