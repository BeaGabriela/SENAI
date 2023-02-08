const express = require('express')
const router = express.Router()

const compromisso = require('../controllers/compromisso')

router.get('/', compromisso.teste)
router.post('/create', compromisso.create)

module.exports = router