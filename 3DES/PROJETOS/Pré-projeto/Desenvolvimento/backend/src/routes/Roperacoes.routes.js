const express = require('express');

const router = express.Router();

const Roperacoes = require('../controllers/Relatorios/Roperacoes');

const middle = require('../middleware/middleware');

router.post('*', middle.validaAcesso)
router.put('*', middle.validaAcesso)
router.delete('*', middle.validaAcesso)

router.post('/Roperacoes', Roperacoes.create);
router.get('/Roperacoes', Roperacoes.read);
router.get('/Roperacoes/:id', Roperacoes.readOne);
router.put('/Roperacoes/:id', Roperacoes.update);
router.delete('/Roperacoes/:id', Roperacoes.remove);

module.exports = router;