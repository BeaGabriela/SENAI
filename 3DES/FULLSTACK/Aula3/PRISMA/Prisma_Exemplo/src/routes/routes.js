const express = require('express')
const router = express.Router()

const funcionario = require('../controllers/funcionario')

router.get('/funcionarios', funcionario.read)
router.post('/funcionarios', funcionario.create)
router.put('/funcionarios', funcionario.update)
router.delete('/funcionarios', funcionario.remove)


module.exports = router;