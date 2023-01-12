const express = require('express')
const router = express.Router()


const receitas = require('../controllers/comida.controller.js')

router.get('/comida', receitas.listarComidas)

module.exports = router;