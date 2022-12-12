const express = require('express');
const router = express.Router();

const filme = require('../controllers/filmes');

router.post("/pirateflix", filme.cadastrarfilme);
router.get("/pirateflix/:titulo", filme.buscarAlgo);
router.delete("/pirateflix/:id", filme.excluirFilme);

module.exports = router;