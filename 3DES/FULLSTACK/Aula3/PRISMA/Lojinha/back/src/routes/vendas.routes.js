const express = require('express');

const router = express.Router();

const vendas = require('../controllers/vendas');

router.post('/vendas', vendas.createVendas);
router.get('/vendas', vendas.readVendas);
router.get('/vendas/:id', vendas.readOneVendas);

module.exports = router;