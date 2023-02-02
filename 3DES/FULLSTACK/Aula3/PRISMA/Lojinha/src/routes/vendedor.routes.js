const express = require('express');

const router = express.Router();

const vendedor = require('../controllers/vendedor');

router.post('/vendedor', vendedor.create);
router.get('/vendedor', vendedor.read);
router.get('/vendedor/:id', vendedor.readOne);

module.exports = router;