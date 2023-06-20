// require('dotenv').config();
const express = require('express');
const cors = require('cors');

const cliente = require('./src/routes/clientes.routes');
const automoveis = require('./src/routes/automoveis.routes');
const concessionaria = require('./src/routes/concessionaria.routes');
const alocacao = require('./src/routes/alocacao.routes');
const vendas = require('./src/routes/vendas.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cliente);
app.use(automoveis);
app.use(concessionaria);
app.use(alocacao);
app.use(vendas);




app.listen(3000, () => {
    console.log('Funcionando na porta 3000');
  });
  