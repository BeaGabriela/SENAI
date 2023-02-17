const express = require('express');

const router = express.Router();

const usuario = require('../controllers/usuario');

router.post('/usuario', usuario.create);
router.get('/usuario', usuario.read);
router.get('/usuario/:id', usuario.readOne);
router.post('/usuario/login', usuario.login);
router.put('/usuario/:id', usuario.update);
router.delete('/usuario/:id', usuario.remove);

module.exports = router;