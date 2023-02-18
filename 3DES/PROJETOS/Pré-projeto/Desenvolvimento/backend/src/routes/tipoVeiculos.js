const express = require('express');

const router = express.Router();

const tipVeiculos = require('../controllers/tipoVeiculos');

router.post('/tipVeiculos', tipVeiculos.create);
router.get('/tipVeiculos', tipVeiculos.read);
router.get('/tipVeiculos/:id', tipVeiculos.readOne);
router.put('/tipVeiculos/:id', tipVeiculos.update);
router.delete('/tipVeiculos/:id', tipVeiculos.remove);

module.exports = router;