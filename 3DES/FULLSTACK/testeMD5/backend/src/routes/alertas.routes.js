const express = require('express');

const router = express.Router();

const Alerta = require('../controllers/alertas.controllers');

// const Middle = require('../middleware/middleware');

// router.post('*', Middle.acessValidator);
// router.get('*', Middle.acessValidator);
// router.put('*', Middle.acessValidator);
// router.delete('*', Middle.acessValidator);

router.post('/cadastraralerta/:id_usuario', Alerta.criar);
router.get('/listaralertas', Alerta.listarAlertas);
router.get('/veralerta/:id', Alerta.verAlerta);
router.put('/atualizaralerta/:id', Alerta.editarAlerta);
router.delete('/excluiralerta/:id', Alerta.excluirAlerta);

module.exports = router;