const express = require('express')
const router = express.Router()

const funcionario = require('../controllers/funcionario')

router.get('/funcionarios', funcionario.read)
router.get('/funcionarios/:id', funcionario.readFunc)
router.post('/funcionarios', funcionario.create)
router.put('/funcionarios/:id', funcionario.update)
router.delete('/funcionarios/:id', funcionario.remove)


module.exports = router;