const express = require('express')
const router = express.Router()

const tarefa = require('../controllers/status')

router.get('/status', tarefa.read)
router.get('/status/:id_status', tarefa.readStatus)
router.post('/status', tarefa.create)
router.put('/status/:id_status', tarefa.update)
router.delete('/status/:id_status', tarefa.remove)


module.exports = router;