const express = require('express');
const router = express.Router();

const estaciona = require('../controllers/controle.js')

 router.post('/estacionamento/entrada', estaciona.cadastrarEntrada)
 router.put('/estacionamento/entrada', estaciona.alterarEntrada)
 router.post('/estacionamento/funcionarios', estaciona.cadastrarFunc)
 router.get('/estacionamento/View_entradas', estaciona.listarvagas)
// router.get('/solicitacoes/Produtos', Solicita.listarProdutos)
// router.get('/solicitacoes/Departamentos', Solicita.listarDep)
// router.get('/solicitacoes/Solicitacoes/:Data_sol', Solicita.listarSoliciDATA)
router.get('/estacionamento/entrada', estaciona.listarentradas)
router.get('/estacionamento/valor', estaciona.listarvalores)
router.get('/estacionamento/funcionarios', estaciona.listarFUNC)
router.get('/estacionamento/entrada/:id', estaciona.buscarId)

// router.delete('/solicitacoes/Departamentos/:Cod_Depto', Solicita.excluirDepartamentos)
// router.delete('/solicitacoes/Produtos/:Cod_Produto', Solicita.ExcluirProd)

module.exports = router;
