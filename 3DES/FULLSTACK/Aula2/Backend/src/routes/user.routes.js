const express = require('express')
const router = express.Router()


const entregadores = require('../controllers/user.controller')

router.post('/logar', entregadores.Logar)



module.exports = router;