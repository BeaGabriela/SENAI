const express = require('express');

const router = express.Router();

const alocacao = require('../controllers/aloacacao');


router.post('/alocacao', alocacao.create);
router.get('/alocacao', alocacao.read);
router.get('/readV', alocacao.readV);
router.get('/alocacao/:id', alocacao.readOne);

module.exports = router;