const express = require('express');

const router = express.Router();

const popular = require('../controllers/comidas/popular');

router.post('/popular', popular.create);
router.get('/popular', popular.read);
router.get('/popular/:id', popular.readOne);
router.put('/popular/:id', popular.update);
router.delete('/popular/:id', popular.remove);

module.exports = router;