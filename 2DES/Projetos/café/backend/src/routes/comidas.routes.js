const express = require('express')
const router = express.Router()


const receitas = require('../controllers/comida.controller.js')

router.get('/comida', receitas.listarComidas)
router.get('/comidas', receitas.readComidas)
router.get('/proporcoes', receitas.readPro)
router.get('/popular', receitas.listarPopular)
router.post('/cadastrarComida', receitas.cadastrarComidas)
router.post('/cadastrarProporcoes', receitas.cadastrarProporcao)

module.exports = router;