const express = require('express');

const router = express.Router();

const concessionaria = require('../controllers/concessionaria');


router.get('/concessionaria', concessionaria.read);
router.get('/concessionaria/:id', concessionaria.readOne);

module.exports = router;