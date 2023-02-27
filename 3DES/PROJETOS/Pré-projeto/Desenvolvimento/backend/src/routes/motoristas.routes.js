const express = require('express');

const router = express.Router();

const motorista = require('../controllers/motorista');

const middle = require('../middleware/middleware');

router.post('*', middle.validaAcesso)
router.put('*', middle.validaAcesso)
router.delete('*', middle.validaAcesso)

router.post('/motorista', motorista.create);
router.get('/motorista', motorista.read);
router.get('/motorista/:ocupado', motorista.readOne);
router.put('/motorista/:id', motorista.update);
router.delete('/motorista/:id', motorista.remove);

module.exports = router;