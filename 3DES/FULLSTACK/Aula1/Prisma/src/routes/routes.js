const express = require('express');

const router = express.Router();

const Entregador = require('../controller/entregador');
const Pedido = require('../controller/Pedido');

router.get('/', Entregador.test);
router.post('/entregadores/create', Entregador.create);
router.get('/entregadores/read', Entregador.readAll);
router.get('/entregadores/read/:id', Entregador.read);
router.post('/entregadores/login', Entregador.login);

router.post('/pedidos/create', Pedido.create);
router.get('/pedidos/read', Pedido.readAll);
router.get('/pedidos/read/:id', Pedido.read);

module.exports = router;