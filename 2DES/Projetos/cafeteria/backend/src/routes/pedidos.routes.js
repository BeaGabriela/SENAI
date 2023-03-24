const express = require('express');

const router = express.Router();

const pedidos = require('../controllers/comidas/pedidos');

router.post('/pedidosCreate', pedidos.create);
router.get('/pedidos', pedidos.read);
router.get('/pedidos/:id', pedidos.readOne);
router.put('/pedidos/:id', pedidos.update);
router.delete('/pedidos/:id', pedidos.remove);

module.exports = router;