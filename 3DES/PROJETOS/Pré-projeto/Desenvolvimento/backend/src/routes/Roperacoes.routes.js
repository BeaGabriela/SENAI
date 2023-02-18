const express = require('express');

const router = express.Router();

const Roperacoes = require('../controllers/Relatorios/Roperacoes');

router.post('/Roperacoes', Roperacoes.create);
router.get('/Roperacoes', Roperacoes.read);
router.get('/Roperacoes/:id', Roperacoes.readOne);
router.put('/Roperacoes/:id', Roperacoes.update);
router.delete('/Roperacoes/:id', Roperacoes.remove);

module.exports = router;