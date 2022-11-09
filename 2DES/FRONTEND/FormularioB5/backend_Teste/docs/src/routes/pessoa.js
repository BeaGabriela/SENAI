const express = require('express');
const router = express.Router();

const c = require('../controllers/controle.js')

router.post('/banco/cliente', c.cadastrarPessoa)
router.get('/banco/cliente', c.listarClientes)

module.exports = router;