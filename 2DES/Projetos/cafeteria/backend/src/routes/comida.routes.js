const express = require('express');

const router = express.Router();

const comida = require('../controllers/comidas/comida');

router.post('/comidaCreate', comida.create);
router.get('/comida', comida.read);
router.get('/comida/:id', comida.readOne);
router.put('/comida/:id', comida.update);
router.delete('/comida/:id', comida.remove);

module.exports = router;