const express = require('express');

const router = express.Router();

const equipamentos = require('../controllers/equipamentos');


router.post('/equipamentosCreate', equipamentos.create);
router.get('/equipamentos', equipamentos.read);
router.get('/equipamentos/:id', equipamentos.readOne);
router.put('/equipamentos/:id', equipamentos.update);
router.delete('/equipamentos/:id', equipamentos.remove);

module.exports = router;