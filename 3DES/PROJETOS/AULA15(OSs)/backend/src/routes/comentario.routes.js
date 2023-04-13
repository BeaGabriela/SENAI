
const express = require('express');

const router = express.Router();

const comentario = require('../controllers/comentario');

router.post('/comentario/create', comentario.criar)

module.exports = router;