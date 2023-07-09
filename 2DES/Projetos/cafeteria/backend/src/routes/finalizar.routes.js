const express = require('express');

const router = express.Router();

const finalizar = require('../controllers/comidas/finalizar');

router.post('/createFinalizar', finalizar.create);
router.get('/finalizar', finalizar.read);
router.get('/finalizar/:id', finalizar.readOne);
router.put('/finalizar/:id', finalizar.update);
router.delete('/finalizar/:id', finalizar.remove);

module.exports = router;