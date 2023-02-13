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
                
            }else{
                res.status(500).json(err).end()
            }
        })
    }

    })
}


const cadastrarProporcao = async (req,res)=>{
        let string = comidas.cadastrarProporcao(req.body)
        con.query(string, (err, result)=>{
            if(err==null){
                res.json(result).status(201).end()
            }else{
                res.status(500).json(err).end()
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

const readComidas = (req, res) => {
    let string = comidas.read()
    con.query(string, (err, result) => {
        if(err == null){
            res.json(result).end()
        }else{
			res.status(400).end()
            }
    })
}

const readPro = (req, res) => {
    let string = comidas.readProp()
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
    listarPopular,
    readComidas,
    cadastrarProporcao,
    readPro
}