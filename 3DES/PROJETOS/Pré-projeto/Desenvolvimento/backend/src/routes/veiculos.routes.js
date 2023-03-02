const express = require('express');

const router = express.Router();

const veiculos = require('../controllers/veiculos');

const middle = require('../middleware/middleware');

//router.post('*', middle.validaAcesso)
router.put('*', middle.validaAcesso)
router.delete('*', middle.validaAcesso)

router.post('/veiculos' ,veiculos.create);
router.get('/veiculos', veiculos.read);
router.get('/veiculos/:uso', veiculos.readOne);
router.put('/veiculos/:id', veiculos.update);
router.delete('/veiculos/:id', veiculos.remove);

module.exports = router;