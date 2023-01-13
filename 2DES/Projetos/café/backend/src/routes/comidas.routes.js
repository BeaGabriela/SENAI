const express = require('express')
const router = express.Router()


const receitas = require('../controllers/comida.controller.js')

router.get('/comida', receitas.listarComidas)
router.post('/cadastrarComida', receitas.cadastrarComidas)

module.exports = router;