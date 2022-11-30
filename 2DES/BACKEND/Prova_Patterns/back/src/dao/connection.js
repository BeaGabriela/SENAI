require('dotenv').config()
const mysql = require('mysql')

class Connect{
    static con = mysql.createConnection({
        host: 'localhost',
        database: process.env.MYSQL_DB || 'arquivos',
        user : process.env.MYSQL_USER || 'root'
    })
}

const con = Connect.con

module.exports = con;