const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'consultas',
    user: 'root'
});

module.exports = connection;