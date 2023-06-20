const express = require('express');

const router = express.Router();

const automoveis = require('../controllers/automoveis');


router.post('/CreateAuto', automoveis.create);
router.get('/auto', automoveis.read);
router.get('/auto/:id', automoveis.readOne);

module.exports = router;