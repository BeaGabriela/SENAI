const express = require('express');
const router = express.Router();

const usuario = require('../controllers/usuario.controller');

router.get('/usuario', usuario.teste);
router.get('/usuarios', usuario.list);
router.post('/usuario', usuario.create);
router.post('/usuario/login', usuario.login);
router.put('/usuario/:id', usuario.update);

module.exports = router;