const express = require('express');

const router = express.Router();

const marcadores = require('../controllers/marcadores_mapa.controllers');


router.post('/marcadores', marcadores.create);
router.get('/marcadores', marcadores.listar);
// router.get('/usuario/:id', usuario.readOne);
// router.post('/usuario/login', usuario.login);
// router.put('/usuario/:id', usuario.update);
// router.delete('/usuario/:id', usuario.remove);

module.exports = router;