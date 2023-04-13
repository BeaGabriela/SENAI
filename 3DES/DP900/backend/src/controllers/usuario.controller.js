const jwt = require('jsonwebtoken');
require('dotenv').config();

const UsuarioSchema = require('../models/usuarios.models')


const teste = async function (req, res) {
    res.json('API Ok, aguardando requisição').end();
};

const create = async (req, res) => {
    const Usuario = new UsuarioSchema(req.body);

    const user = await Usuario.save();

    res.status(200).json(user).end();
}

const login = async (req, res) => {
    const user = req.body
    const logar = await UsuarioSchema.findOne({'email': user.email, 'senha': user.senha})
    // const logar = await UsuarioSchema.find({
    //     email: req.body.email,
    //     senha: req.body.senha
    // })

    // if (logar.length > 0) {
    //     jwt.sign(logar[0], process.env.KEY, { expiresIn: '10h' }, function (err, token) {
    //         console.log(token);
    //         if (err == null) {
    //             logar[0]["token"] = token;
    //             res.status(200).json(logar[0]).end();

    //         } else {
    //             res.status(401).json(err).end();
    //         }
    //     })
    // } else {
    //     res.status(404).json('Erro no login').end();
    // }


    res.status(200).json(logar).end();
}


const list = async (req, res) => {
    const ret = await UsuarioSchema.find({});

    res.status(200).json(ret).end();
}


const update = async (req, res) => {
    //const Usuario = await UsuarioSchema.findOne({ "_id": req.params.id })
    const Usuario = await UsuarioSchema.updateOne({ "_id": req.params.id }, { $set: req.body })



    // const user = await UsuarioSchema.save({ "_id": req.params.id });

    res.status(200).json(Usuario).end();
}

module.exports = {
    teste,
    create,
    list,
    update,
    login
}