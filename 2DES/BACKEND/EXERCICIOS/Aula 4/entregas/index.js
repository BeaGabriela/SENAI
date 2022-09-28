const express = require ("express");
const cors = require ("cors");
const mysql = require ("mysql");

const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'entregas'
})

app.get('/', (req, res) => {
    let string = 'Select * from vw_clientes';
    con.query (string, (err, results) => {
        if(err == null){
            res.json(results)
        }
    });
})

app.listen(5000, ()=> {
    console.log('Respondendo na porta 5000');
});