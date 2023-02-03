const express = require('express');

const router = express.Router();

const detalhe = require('../controllers/detalhes');

router.post('/detalhes', detalhe.create);
router.get('/detalhes', detalhe.read);
router.get('/detalhes/:id', detalhe.readOne);

module.exports = router;