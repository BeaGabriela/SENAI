const express = require('express')
const router = express.Router()

const usuarios = require('../controllers/user.controller.js')

router.get('/listarUser', usuarios.listandoUsers)

module.exports = router;