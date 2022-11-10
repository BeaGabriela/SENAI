
const express = require('express');
const cors = require('cors');

const itens = require('./src/routes/estaciona.js');

const app = express()
    .use(express.json())
    .use(cors())
    .use(itens)
app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});
