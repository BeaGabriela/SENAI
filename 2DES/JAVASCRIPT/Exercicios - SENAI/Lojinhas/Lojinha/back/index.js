const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const { json } = require('express');


const conDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'lojinha'
});

const app = express();
app.use(express.json()); //Permite que você envie e receba estruturas jsons por padrão.
app.use(cors()); //Habilita a comunicação cruzada.

app.get('/produto', (req, res) => {
    let string = "select * from produto";

    conDB.query(string, (err, result) => {
        if (err == null) {
            res.json(result).status(200).end(); // '.status' trás o json e o status(Que é basicamente o número, se deu falha ou não. ).
        } else {
            res.json(err).status(402).end();
        }
    })
})

app.get("/produto/:cod", (req, res) => { // '/:cod' => Estabelecendo parâmetros para a busca do parâmetro especificado anteriormente. ':' -> Significa um parâmetro que vai ser passado.
    let query = `select * from produto where cod = '${req.params.cod}'`
    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        } else {
            res.status(402).json(err).end();
        }
    })
})

app.post('/produto', (req, res) => {
    // req.query => http://localhost:3000/produto?cod=abc1234&nome=teste
    // req.params => /produtos/:cod/:nome => http://localhost:3000/produtos/abc1234?/teste -- Buscando informações.
    // console.log(req.body);   
    let query = `INSERT INTO produto VALUES (DEFAULT, '${req.body.cod}', '${req.body.nome}', ${req.body.quantidade}, ${req.body.preco})`;
    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();

        }
    })
})

app.delete("/produto", (req, res) => {
    let query = `DELETE FROM produto WHERE cod = '${req.body.cod}'`;

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        };
    });
});

app.put("/produto", (req, res) => {
    let query = `update produto set cod = '${req.body.cod}', nome = '${req.body.nome}', quantidade = ${req.body.quantidade}, preco = ${req.body.preco} where cod = '${req.body.cod}'`;
    conDB.query(query, (err, result) => {
        if(err == null ){
            res.status(200).json(req.body).end();
        }else{
            res.status(400).json(err).end()
        }
    })
})

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});