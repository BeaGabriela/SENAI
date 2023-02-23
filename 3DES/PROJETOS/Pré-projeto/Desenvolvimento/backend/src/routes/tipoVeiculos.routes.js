const express = require('express');

const router = express.Router();

const tipVeiculos = require('../controllers/tipVeiculo');

const middle = require('../middleware/middleware');

router.post('*', middle.validaAcesso)
router.put('*', middle.validaAcesso)
router.delete('*', middle.validaAcesso)

router.post('/tipVeiculos', tipVeiculos.create);
router.get('/tipVeiculos', tipVeiculos.read);
router.get('/tipVeiculos/:id', tipVeiculos.readOne);
router.put('/tipVeiculos/:id', tipVeiculos.update);
router.delete('/tipVeiculos/:id', tipVeiculos.remove);

module.exports = router;