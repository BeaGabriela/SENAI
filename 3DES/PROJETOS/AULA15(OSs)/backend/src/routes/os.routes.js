
const express = require('express');

const router = express.Router();

const os = require('../controllers/os');

router.post('/create', os.criar)
router.put('/update', os.alterar)
router.put('/update/:id', os.concluir)
router.delete('/del/:id', os.excluir)

module.exports = router;