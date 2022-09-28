const express = require('express');
const router = express.Router();

const Item = require("../controllers/ItemController");

router.get("/patrimonio/itens", Item.listarItens);
router.post("/patrimonio/itens", Item.criarItens);
router.delete("/patrimonio/itens", Item.excluirItens);

//Vincularemos os controles com as rotas.
module.exports = router;