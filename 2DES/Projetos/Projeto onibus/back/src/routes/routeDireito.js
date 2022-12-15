const express = require('express');
const router = express.Router();

const onibus = require('../controllers/ladoDireito.js')

router.get('/onibus/ladoDireito', onibus.listarAssentos)

module.exports = router