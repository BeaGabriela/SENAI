const ligacao = require('../models/users.model.js')
const con = require('../dao/cafeteria.dao.js')

const listandoUsers = (req,res) =>{
    con.query(ligacao.lendoUsuarios(), (err, result) => {
        if(err == null){
            res.json(result).end()
        }else{
            res.json(err).end()
        }
    })
}

module.exports = {
    listandoUsers
}