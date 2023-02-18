const express = require('express');

const router = express.Router();

const veiculos = require('../controllers/veiculos');

router.post('/veiculos', veiculos.create);
router.get('/veiculos', veiculos.read);
router.get('/veiculos/:id', veiculos.readOne);
router.put('/veiculos/:id', veiculos.update);
router.delete('/veiculos/:id', veiculos.remove);

module.exports = router;