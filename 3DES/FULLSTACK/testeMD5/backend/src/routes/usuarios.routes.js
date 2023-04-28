const express = require('express');

const router = express.Router();

const Usuario = require('../controllers/usuarios.controllers');

const Middle = require('../middleware/middleware');

router.put('*', Middle.acessValidator);
router.delete('*', Middle.acessValidator);

router.post('/login', Usuario.login);
router.post('/cadastrarusuario', Usuario.cadastrar);
router.get('/listarusuarios', Usuario.listarUsuarios);
router.get('/perfil/:id', Usuario.verPerfil);
router.put('/atualizarperfil/:id', Usuario.atualizarPerfil);
router.put('/atualizardados/:id', Usuario.atualizarDados);
router.delete('/excluirperfil/:id', Usuario.excluirPerfil);

module.exports = router;