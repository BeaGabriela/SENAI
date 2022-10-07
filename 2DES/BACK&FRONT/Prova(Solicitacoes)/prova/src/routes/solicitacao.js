const express = require('express');
const router = express.Router();

const Solicita = require('../controllers/SolicitacoesController')

router.post('/solicitacoes/solicita_um_item', Solicita.cadastrarSolicitacao)
router.post('/solicitacoes/Produtos', Solicita.cadastrarProdutos)
router.post('/solicitacoes/Departamentos', Solicita.cadastrarDepartament)
router.get('/solicitacoes/View_Solicitacoes', Solicita.listarSolicitacoes)
router.get('/solicitacoes/Produtos', Solicita.listarProdutos)
router.get('/solicitacoes/Departamentos', Solicita.listarDep)
router.get('/solicitacoes/Solicitacoes/:Data_sol', Solicita.listarSoliciDATA)
router.get('/solicitacoes/Prod_Dep/:Nome_produto', Solicita.listarProdNome)
router.get('/solicitacoes/Solicitacoes/:Cod_Func', Solicita.listarTotal)
router.delete('/solicitacoes/Departamentos/:Cod_Depto', Solicita.excluirDepartamentos)

module.exports = router;
