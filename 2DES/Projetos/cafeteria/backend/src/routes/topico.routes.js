const express = require('express');

const router = express.Router();

const topico = require('../controllers/comidas/topico');

router.post('/topico', topico.create);
router.get('/topico', topico.read);
router.get('/topico/:id', topico.readOne);
router.put('/topico/:id', topico.update);
router.delete('/topico/:id', topico.remove);

module.exports = router;