const comidas = require('../models/comida.model.js')
const con = require('../dao/cafeteria.dao.js')
const multer = require('multer')
const upload = multer().single('img')

const cadastrarComidas = async (req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            res.status(500).json({error:1, payload: err}).end()
    }else{
        let string = comidas.cadastrarComida(req.body, req.file)
        con.query(string, (err, result)=>{
            if(err==null){
                res.json(result)
                // res.redirect('http://127.0.0.1:5500/frontend/HOME/index.html')
            }else{
                res.status(500).json(err).end()
            }
        })
    }

    })
}

const listarComidas = (req, res) => {
    let string = comidas.readAll()
    con.query(string, (err, result) => {
        if(err == null){
            res.json(result).end()
        }else{
			res.status(400).end()
            }
    })
}

const listarPopular = (req, res) => {
    let string = comidas.readPopular()
    con.query(string, (err, result) => {
        if(err == null){
            res.json(result).end()
        }else{
			res.status(400).end()
            }
    })
}


module.exports= {
    listarComidas,
    cadastrarComidas,
    listarPopular
}