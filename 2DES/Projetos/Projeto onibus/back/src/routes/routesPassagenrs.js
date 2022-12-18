const express = require('express');
const router = express.Router();

const onibus = require('../controllers/passageiro.js')

router.post('/onibus/passageiros', onibus.cadastrarPassageiros)

module.exports = router