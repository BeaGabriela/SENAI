const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'onibus'
});

app.get('/onibus',(req,res)=>{
    let string = "select * from vw_onibus";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

app.get('/horarios',(req,res)=>{
    let string = "select * from vw_horarios";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});



app.listen(2000, () => {
    console.log("Respondendo na porta 2000");
});