const express = require ("express");
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const con = mysql.createConnection({  //String de conexão.
    user: 'root',
    host: 'localhost',
    database: 'clientes'
});

app.get('/', (req, res) =>{
    let string = 'Select * from vw_clientes';
    con.query(string, (err, result) => {
        if(err == null){
            res.json(result)
        }
    });
    

});

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});