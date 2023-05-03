const express = require('express');

const router = express.Router();

const usuario = require('../controllers/usuario');


router.post('/usuarioCreate', usuario.create);
router.post('/login', usuario.login);
router.get('/usuario', usuario.read);
router.get('/usuario/:id', usuario.readOne);
router.put('/usuario/:id', usuario.update);
router.delete('/usuario/:id', usuario.remove);

module.exports = router;