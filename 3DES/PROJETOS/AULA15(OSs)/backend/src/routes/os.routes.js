
const express = require('express');

const router = express.Router();

const os = require('../controllers/os');

router.post('/os/create', os.criar)
router.put('/os/update', os.alterar)
router.put('/os/update/:id', os.concluir)
router.delete('/os/del/:id', os.excluir)

module.exports = router;