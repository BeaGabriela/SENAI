const express = require('express');
const router = express.Router();

const m = require('../controllers/cursos.controller')

router.get('/readAll',  m.readAll)

module.exports = router;