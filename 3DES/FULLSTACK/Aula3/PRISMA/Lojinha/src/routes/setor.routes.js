const express = require('express');

const router = express.Router();

const setor = require('../controllers/setores');

router.post('/setor', setor.create);
router.get('/setor', setor.read);
router.get('/setor/:id', setor.find);

module.exports = router;