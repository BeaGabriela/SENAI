const express = require('express')
const router = express.Router()

const tarefa = require('../controllers/funcionario')

router.get('/tarefas', tarefa.read)
router.get('/tarefas/:id', tarefa.readFunc)
router.post('/tarefas', tarefa.create)
router.put('/tarefas/:id', tarefa.update)
router.delete('/tarefas/:id', tarefa.remove)

module.exports = router;