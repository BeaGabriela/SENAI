
const express = require('express');

const router = express.Router();

const comentario = require('../controllers/comentario');

router.post('/create', comentario.criar)

module.exports = router;