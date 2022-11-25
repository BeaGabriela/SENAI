const express = require('express');
const router = express.Router();

const medication = require('./controller/medicoControllers')

router.get('/', medication.prototype)
router.get('/profissionais/read', medication.listarProfissionais)
router.get('/consultas/read', medication.listarConsultas)
router.get('/tratamentos/read', medication.listarTratamentos)
router.post('/tratamentos/create', medication.cadastrarTra)
router.put('/tratamentos/update', medication.alterarTrat)
router.delete('/tratamentos/del/:id_tratamentos', medication.excluirTra)




module.exports = router;