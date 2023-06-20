const express = require('express');

const router = express.Router();

const cliente = require('../controllers/clientes');


router.post('/CreateCliente', cliente.create);
router.get('/cliente', cliente.read);
router.get('/cliente/:id', cliente.readOne);

module.exports = router;