const express = require('express');
const router = express.Router();

const Clientes = require("../src/controllers/ClientesControllers");

router.get("/clientes", Clientes.listarClientes);
router.post("/clientes", Clientes.cadastrarClietes);
router.delete("/clientes", Clientes.excluirCliente);

module.exports = router;