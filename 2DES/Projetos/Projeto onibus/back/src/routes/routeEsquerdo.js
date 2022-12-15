const express = require('express');
const router = express.Router();

const onibus = require('../controllers/ladoEsquerdo.js')

router.get('/onibus/ladoEsquerdo', onibus.listarAssentos)

module.exports = router