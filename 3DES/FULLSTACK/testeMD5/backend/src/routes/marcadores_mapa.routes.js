const express = require('express');

const router = express.Router();

const marcadores = require('../controllers/marcadores_mapa.controllers');


router.post('/marcadores', marcadores.create);
router.get('/marcadores', marcadores.listar);
router.get('/marcadores/:id', marcadores.filtrar);
router.put('/marcadores/:id', marcadores.alterar);
router.delete('/marcadores/:id', marcadores.apagar);

module.exports = router;