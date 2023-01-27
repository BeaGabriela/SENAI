const express = require('express')
const router = express.Router()

const tarefasAfazer = require('../controllers/tarefas.controllers')

//Rotas GET
router.get('/tarefasGerais', tarefasAfazer.readAll)
router.get('/tarefasAbertas', tarefasAfazer.readAbertas)
router.get('/tarefasCanceladas', tarefasAfazer.readCanceladas)
router.get('/tarefasFinal', tarefasAfazer.readFinalizadas)

//Rotas POST
router.post('/cadastrar', tarefasAfazer.createNew)

//Rotas PUT
router.put('/alterar', tarefasAfazer.updateHora_fim)

module.exports = router;