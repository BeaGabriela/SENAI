const Item = require('../models/Item');
const con = require('../models/patrimonioDAO');
 
 const listarItens = (req,res) =>{
  con.query(Item.toReadAll, (err, result) =>{
    if(err == null){
        res.json(result).end()
    }else{
        res.status(500).end()
    }
  })
 }
 const criarItens = (req,res) =>{
    res.json('Em criação.').end()
 }
 const excluirItens = (req,res) =>{
    res.json('Em criação.').end()
 }
 
 


 
 module.exports = {
 listarItens,
 criarItens,
 excluirItens
 }