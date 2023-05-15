const express = require('express');

const router = express.Router();

const Contato = require('../controllers/contatos.controllers');

const Middle = require('../middleware/middleware');

// router.post('*', Middle.acessValidator);
// router.get('*', Middle.acessValidator);
// router.put('*', Middle.acessValidator);
// router.delete('*', Middle.acessValidator);

router.post('/cadastrarcontato', Contato.criar);
router.post('/cadastrarcontatofUNC', Contato.solicitarAmizade);
router.get('/listarcontatos', Contato.listarTodosContatos);
router.get('/listarmeuscontatos/:contatante', Contato.listarMeusContatos);
router.get('/vercontato/:id', Contato.verContato);
router.delete('/excluircontato/:id', Contato.excluirContato);

module.exports = router;