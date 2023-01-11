const express = require('express')
const router = express.Router()


const usuarios = require('../controllers/user.controller.js')

router.get('/Listar', usuarios.listandoUsers)
router.post('/login', usuarios.login)
router.post('/cadastrarUser', usuarios.cadastrarUser)

module.exports = router;