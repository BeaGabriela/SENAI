const express = require('express');

const router = express.Router();

const vendas = require('../controllers/vendas');


router.post('/vendasCreate',  vendas.create);
router.get('/vendas', vendas.read);
router.get('/vendas/:id', vendas.readOne);
router.put('/vendas/:id', vendas.update);
router.delete('/vendas/:id', vendas.remove);

module.exports = router;