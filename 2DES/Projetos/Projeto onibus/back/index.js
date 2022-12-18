const express = require('express');
const cors = require('cors');

const routesD = require('./src/routes/routeDireito');
const routesP = require('./src/routes/routesPassagenrs');

const app = express();
app.use(express.json());
app.use(cors());
app.use(routesP);
app.use(routesD);

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});