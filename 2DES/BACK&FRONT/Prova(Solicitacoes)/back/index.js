require('dotenv').config();
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const itens = require('./src/routes/solicitacao');

const app = express();
app.use(express.json())
.use(cors())
.use(itens)
.listen(PORT, () => {
    console.log("Respondendo na porta 5000" + PORT);
});