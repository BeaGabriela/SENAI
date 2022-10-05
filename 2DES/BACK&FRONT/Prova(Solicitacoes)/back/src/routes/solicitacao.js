const express = require ('express');
const router = express.Router();

const Solicita = require('../controllers/SolicitacoesController')

router.post('/solicitacoes/solicita_um_item', Solicita.cadastrarSolicitacao)
router.get('/solicitacoes/View_Solicitacoes', Solicita.listarSolicitacoes)

module.exports = router;
