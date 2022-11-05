const mysql = require('mysql');


const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'estacionamento'
})

module.exports = con;