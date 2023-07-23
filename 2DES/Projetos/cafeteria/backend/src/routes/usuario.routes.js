const express = require('express');

const router = express.Router();

const usuario = require('../controllers/usuarios/usuario');

// const middle = require('../middleware/middleware');
// 
// router.put('*', middle.validaAcesso)
// router.delete('*', middle.validaAcesso)


router.post('/usuarioCreate', usuario.create);
router.get('/usuario', usuario.read);
router.get('/usuario/:id', usuario.readOne);
router.post('/usuario/login', usuario.login);
router.put('/usuario/:id', usuario.update);
router.delete('/usuario/:id', usuario.remove);

module.exports = router;