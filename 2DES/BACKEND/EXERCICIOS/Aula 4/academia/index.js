const express = require ("express");
const cors = require ("cors");
const mysql = require ("mysql");

const app = express();

app.use(cors())

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'academia'
})

app.get('/academia/alunos', (req, res) => {
    let string = 'Select * from vw_alunos';
    con.query (string, (err, results) => {
        if(err == null){
            res.json(results)
        }
    });
})


app.get('/academia/Aparelho', (req, res) => {
    let string = 'Select * from Aparelho';
    con.query (string, (err, results) => {
        if(err == null){
            res.json(results)
        }
    });
})

app.get('/academia/Exercicio', (req, res) => {
    let string = 'Select * from Exercicio';
    con.query (string, (err, results) => {
        if(err == null){
            res.json(results)
        }
    });
})

app.get('/academia/fichas', (req, res) => {
    let string = 'Select * from fichas';
    con.query (string, (err, results) => {
        if(err == null){
            res.json(results)
        }
    });
})

app.get('/academia/vw_fichas', (req, res) => {
    let string = 'Select * from vw_fichas';
    con.query (string, (err, results) => {
        if(err == null){
            res.json(results)
        }
    });
})

app.get('/academia/vw_exercicio', (req, res) => {
    let string = 'Select * from vw_exercicio';
    con.query (string, (err, results) => {
        if(err == null){
            res.json(results)
        }
    });
})





app.listen(5000, ()=> {
    console.log('Respondendo na porta 5000');
});