const express = require('express');

const router = express.Router();

const Rmanutencao = require('../controllers/Relatorios/Rmanutencao');

router.post('/Rmanutencao', Rmanutencao.create);
router.get('/Rmanutencao', Rmanutencao.read);
router.get('/Rmanutencao/:id', Rmanutencao.readOne);
router.put('/Rmanutencao/:id', Rmanutencao.update);
router.delete('/Rmanutencao/:id', Rmanutencao.remove);

module.exports = router;