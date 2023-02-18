const express = require('express');

const router = express.Router();

const operacoes = require('../controllers/operacoes');

router.post('/operacoes', operacoes.create);
router.get('/operacoes', operacoes.read);
router.get('/operacoes/:id', operacoes.readOne);
router.put('/operacoes/:id', operacoes.update);
router.delete('/operacoes/:id', operacoes.remove);

module.exports = router;