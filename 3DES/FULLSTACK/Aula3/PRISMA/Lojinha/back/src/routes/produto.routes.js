const express = require('express');

const router = express.Router();

const setor = require('../controllers/produtos');

router.post('/produtos', setor.create);
router.get('/produtos', setor.read);
router.get('/produtos/:id', setor.readOne);

module.exports = router;