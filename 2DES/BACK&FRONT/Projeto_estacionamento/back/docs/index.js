const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(cors());


const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    database: "projeto_estacionamento"
});

app.get('/projeto_estacionamento/entrada', (req ,res) => {
    let string = 'select * from entrada order by id';
    con.query(string,(err, result) => {
        if(err==null){
            res.json(result);
        }
    });
});

app.post('/projeto_estacionamento/entrada', (req,res) => {
    let string = `INSERT INTO entrada VALUES (DEFAULT, '${req.body.vaga}', '${req.body.placa}', curtime(), curdate(),'${req.body.tipo}' )`;
    con.query(string,(err, result) => {
        if(err==null){
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    });
});

app.post('/projeto_estacionamento/saida', (req,res) => {
    let string = `INSERT INTO saida VALUES ('${req.body.id}', curtime(), '${req.body.datas_saida}' )`;
    con.query(string,(err, result) => {
        if(err==null){
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    });
});

app.get('/projeto_estacionamento/saida', (req,res) => {
    let string = 'select * from saida order by id';
    con.query(string,(err, result) => {
        if(err==null){
            res.json(result);
        }
    });
});


app.get('/projeto_estacionamento/View_vizua', (req,res) => {
    let string = 'select * from View_vizua';
    con.query(string,(err, result) => {
        if(err==null){
            res.json(result);
        }
    });
});




app.listen(5000, () => {
    console.log('Respondendo na porta 50000')
})