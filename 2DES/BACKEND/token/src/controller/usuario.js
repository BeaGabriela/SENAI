const jwt = require('jsonwebtoken')
require('dotenv').config()


const login =(req, res) => {
    const user = req.body

    //consulta ao banco para ver se o usuario esta cadastrado. 
    //select * from usuarios where email = user.email and senha = user.senha
    const data = {
        "id": 1,
        "nome": "Fulano da Silva",
        "role": "ADMIN"
    }

    

    jwt.sign( data , process.env.KEY, {expiresIn: '1min'} ,function(err, token) { 
     if(err == null){
        data["token"] = token;
        res.status(200).json(data).end()
     }else{
        res.status(404).json(err).end()
     }
      });
}

const remover = (req, res) => {
    const {id} = req.params

    //DELETE FROM usuarios where id = id;
    res.status(200).json({msg: 'Usuario deleteado'}).end()
}

module.exports = {
    login,
    remover
}