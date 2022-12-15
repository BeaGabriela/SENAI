const express = require('express');
const cors = require('cors');

const routesD = require('./src/routes/routeDireito');
const routesE = require('./src/routes/routeEsquerdo');

const app = express();
app.use(express.json());
app.use(cors());
app.use(routesE);
app.use(routesD);

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});