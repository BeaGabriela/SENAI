const express = require('express');

const router = express.Router();

const equipamentos = require('../controllers/equipamentos');

const middle = require('../middleware/middleware');


router.post('/equipamentosCreate',  middle.validaAcesso, equipamentos.create);
router.get('/equipamentos', equipamentos.read);
router.get('/equipamentos/:id', equipamentos.readOne);
router.put('/equipamentos/:id', equipamentos.update);
router.delete('/equipamentos/:id', equipamentos.remove);

module.exports = router;