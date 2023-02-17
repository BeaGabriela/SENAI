const express = require('express');

const router = express.Router();

const nivel = require('../controllers/nivel');

router.post('/nivel', nivel.create);
router.get('/nivel', nivel.read);
router.get('/nivel/:id', nivel.readOne);
router.put('/nivel/:id', nivel.update);
router.delete('/nivel/:id', nivel.remove);

module.exports = router;