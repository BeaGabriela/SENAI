const express = require('express')
const router = express.Router()

const paciente = require('../controllers/paciente.controller')


router.get('/', paciente.iniciar)
router.get('/listar', paciente.listar)
router.get('/filtrar/:id', paciente.filtrar)
router.post('/create', paciente.criar)
router.put('/paciente/alterar/:id', paciente.alterar)
router.delete('/excluir/:id', paciente.excluir)

module.exports = router