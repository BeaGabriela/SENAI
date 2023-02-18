const express = require('express');

const router = express.Router();

const manutencao = require('../controllers/manutencao');

router.post('/manutencao', manutencao.create);
router.get('/manutencao', manutencao.read);
router.get('/manutencao/:id', manutencao.readOne);
router.put('/manutencao/:id', manutencao.update);
router.delete('/manutencao/:id', manutencao.remove);

module.exports = router;