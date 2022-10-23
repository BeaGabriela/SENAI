const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'locacoes'
});

app.get('/locacoes/usuarios', (req, res) => {
    let string = 'select * from usuarios';
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result);
        }
    })
})

app.get('/locacoes/aluga', (req, res) => {
    let string = 'select * from aluga';
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result);
        }
    })
})

app.get('/locacoes/filmes', (req, res) => {
    let string = 'select * from filmes';
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result);
        }
    })
})

app.get('/locacoes/vw_devolucoes', (req, res) => {
    let string = 'select * from vw_devolucoes';
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result);
        }
    })
})

app.post('/locacoes/usuarios', (req, res) => {
    let string = `insert into usuarios values(default, '${req.body.nome}', '${req.body.endereco}', '${req.body.telefone}')`;
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    })
})

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});