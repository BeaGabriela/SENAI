const comidas = require('../models/comida.model.js')
const con = require('../dao/cafeteria.dao.js')
const multer = require('multer')
const upload = multer().single('img')

const listarComidas = (req, res) => {
    let string = comidas.readAll()
    con.query(string, (err, result) => {
        if(err == null){
            res.json(comidas.toAscii(result)).end()
        }
    })
}


module.exports= {
    listarComidas
}