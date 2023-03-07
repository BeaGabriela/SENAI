const express = require('express');

const router = express.Router();

const operacoes = require('../controllers/operacoes');

const middle = require('../middleware/middleware');

router.post('*', middle.validaAcesso)
router.put('*', middle.validaAcesso)
router.delete('*', middle.validaAcesso)

router.post('/operacoes', operacoes.create);
router.get('/operacoes', operacoes.read);
router.get('/operacoes/:concluidas', operacoes.readOne);
router.put('/operacoes/:id/:veiculo/:motorista', operacoes.update);
router.delete('/operacoes/:id', operacoes.remove);

module.exports = router;