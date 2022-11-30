const cursos = require('../models/curso.models')
const con = require('../dao/connection')

const readAll = (req, res) => {
    con.query(cursos.readAll(), (err,result) => {
        if(err == null){
            res.json(result).end()
        }else{
            res.json(err).end()
        }
    })
}


module.exports = { 
    readAll
}