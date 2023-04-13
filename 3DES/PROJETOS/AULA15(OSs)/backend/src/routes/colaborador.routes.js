
const express = require('express');

const router = express.Router();

const colaborador = require('../controllers/colaborador');

router.get('/', colaborador.iniciar)
router.post('/login', colaborador.login)

module.exports = router;