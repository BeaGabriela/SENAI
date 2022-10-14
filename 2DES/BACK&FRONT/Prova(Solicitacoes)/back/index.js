require('dotenv').config();
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const itens = require('./src/routes/solicitacao');

const app = express()
    .use(express.json())
    .use(cors())
    .use(itens)
app.listen(PORT, () => {
    console.log("Respondendo na porta " + PORT);
});