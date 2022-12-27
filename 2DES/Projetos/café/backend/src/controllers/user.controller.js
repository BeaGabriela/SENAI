const ligacao = require('../models/users.model.js')
const con = require('../dao/cafeteria.dao.js')

const listandoUsers = (req,res) =>{
    con.query(ligacao.lendoUsuarios(req.body), (err, result) => {
        if(err = null){
            res.json(result).end()
        }else{
            res.status(500).end()
        }
    })
}

module.exports = {
    listandoUsers
}