const express = require('express');
const router = express.Router()

const Middleware = require('../middleware/middleware')

const usuario = require('../controller/usuario')

router.post('/login', usuario.login)
router.delete('/delete/:id', Middleware.validaAcesso, usuario.remover)

module.exports = router
