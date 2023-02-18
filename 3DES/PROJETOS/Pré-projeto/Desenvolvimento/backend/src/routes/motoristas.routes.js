const express = require('express');

const router = express.Router();

const motorista = require('../controllers/motorista');

router.post('/motorista', motorista.create);
router.get('/motorista', motorista.read);
router.get('/motorista/:id', motorista.readOne);
router.put('/motorista/:id', motorista.update);
router.delete('/motorista/:id', motorista.remove);

module.exports = router;