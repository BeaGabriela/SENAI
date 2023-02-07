const express = require('express')
const router = express.Router()


const receitas = require('../controllers/tabelas.medidas')

router.get('/leite', receitas.listarleite)
router.get('/acucar', receitas.listarAcucar)
router.get('/tempe', receitas.listarTempe)
router.get('/medida', receitas.listarMedidas)



module.exports = router;