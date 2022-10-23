const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const con = mysql.createConnection ({
    user: 'root',
    host : 'localhost',
    database: 'livrocaixa'
});

app.get('/livrocaixa/lancamentos', (req, res)=>{
    let string = 'select * from lancamentos order by n_lancamento';
    con.query(string, (err, result) =>{
        if(err == null){
            res.json(result)
        }
    });
});

app.get('/livrocaixa/lancamentos/:datas', (req, res)=>{
    let string = `select * from lancamentos where = '${req.params.datas}'`;
    con.query(string, (err, result) =>{
        if(err == null){
            res.json(result)
        }
    });
})

app.post('/livrocaixa/lancamentos', (req, res)=>{
    let string = `INSERT INTO lancamentos VALUES (DEFAULT, curdate(), '${req.body.descricao}',${req.body.valor},'${req.body.tipo}')`;
    con.query(string, (err, result) =>{
        if(err == null){
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    });
});


app.listen(5000, ()=>{
    console.log('Respondendo na porta 5000');
});

