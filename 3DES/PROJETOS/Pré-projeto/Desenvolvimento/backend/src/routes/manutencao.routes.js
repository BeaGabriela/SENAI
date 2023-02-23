const express = require('express');

const router = express.Router();

const manutencao = require('../controllers/manutencao');

const middle = require('../middleware/middleware');

router.post('*', middle.validaAcesso)
router.put('*', middle.validaAcesso)
router.delete('*', middle.validaAcesso)

router.post('/manutencao', manutencao.create);
router.get('/manutencao', manutencao.read);
router.get('/manutencao/:id', manutencao.readOne);
router.put('/manutencao/:id', manutencao.update);
router.delete('/manutencao/:id', manutencao.remove);

module.exports = router;