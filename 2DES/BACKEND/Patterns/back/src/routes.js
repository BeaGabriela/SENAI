const express = require('express');
const router = express.Router();

const medication = require('./controller/medicoControllers')
const m = require ('./controller/tratamento')

//Profisionais
router.get('/profissionais/read/', medication.listarProfissionais)

//Consultas
router.get('/consultas/read/', medication.listarConsultas)

//Tratamentos
router.post('/tratamentos/create/', medication.cadastrarTra)
router.get('/tratamentos/read/', medication.listarTratamentos)
router.put('/tratamentos/update/', medication.alterarTrat)
router.delete('/tratamentos/delete/', medication.excluirTra)

router.get('/tratamentos/read', m.readAll)
router.get('/View_Tabelas/read/:id', m.readId)
router.post('/tratamentos/create', m.create)
router.put('/tratamentos/update', m.update)
router.delete('/tratamentos/delete', m.del)


module.exports = router;