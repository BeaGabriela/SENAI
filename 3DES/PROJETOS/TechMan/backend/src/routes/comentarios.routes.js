const express = require('express');

const router = express.Router();

const comentarios = require('../controllers/comentarios');


router.post('/comentariosCreate', comentarios.create);
router.get('/comentarios', comentarios.read);
router.get('/comentarios/:equipamento', comentarios.readOne);
router.put('/comentarios/:id', comentarios.update);
router.delete('/comentarios/:id', comentarios.remove);

module.exports = router;