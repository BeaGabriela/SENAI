const express = require('express');
const cors = require('cors');

const perfil = require('./src/routes/perfil.routes')
const usuario = require('./src/routes/usuario.routes')
const equipamentos = require('./src/routes/equipamentos.routes')
const comentarios = require('./src/routes/comentarios.routes')



const app = express();


app.use(cors());
app.use(express.json());
app.use(perfil)
app.use(usuario)
app.use(equipamentos)
app.use(comentarios)


app.listen(3000, () => { console.log("Funcionando na porta 3000"); })