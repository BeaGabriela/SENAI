const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const filmes = require('../back/src/routes/filmes')

const app = express()
.use(express.json())
.use(cors())
.use(filmes)

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'pirateflix'
});
app.get('/pirateflix', (req, res) => {
    let string = "select * from filmes";
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result);
        }
    });
});

app.listen(5500, () => {
    console.log('Funciona');
})
