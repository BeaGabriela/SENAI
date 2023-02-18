const express = require('express');

const router = express.Router();

const frotas = require('../controllers/frotas');

router.post('/frotas', frotas.create);
router.get('/frotas', frotas.read);
router.get('/frotas/:id', frotas.readOne);
router.put('/frotas/:id', frotas.update);
router.delete('/frotas/:id', frotas.remove);

module.exports = router;