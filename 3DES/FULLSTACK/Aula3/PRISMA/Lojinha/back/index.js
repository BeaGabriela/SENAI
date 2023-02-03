const express = require('express');
const cors = require('cors');

const setor = require('./src/routes/setor.routes');
const produtos = require('./src/routes/produto.routes');
const vendedor = require('./src/routes/vendedor.routes');
const vendas = require('./src/routes/vendas.routes');
const detalhe = require('./src/routes/detalhes.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(setor);
app.use(produtos);
app.use(vendedor);
app.use(vendas);
app.use(detalhe);

app.listen(3000, () => { console.log("Funcionando na porta 3000"); })