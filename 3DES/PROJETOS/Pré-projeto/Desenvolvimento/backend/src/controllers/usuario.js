const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const prisma = new PrismaClient();

const create = async (req, res) => {
    let usuario = await prisma.Usuario.create({
        data: req.body
    });

    res.status(201).json(usuario).end();
}

const read = async (req, res) => {
    let usuario = await prisma.Usuario.findMany();

    res.status(200).json(usuario).end();
}

const readOne = async (req, res) => {
    let usuario = await prisma.Usuario.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(usuario).end();
}

const update = async (req, res) => {
    const usuario = await prisma.Usuario.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(usuario).end()
}

const remove = async(req, res) => {
    const usuario = await prisma.Usuario.delete({
        where:{
            id: Number(req.params.id)
        }
    })
    res.status(200).json(usuario).end() //SEND não é necessario exatamente um banco de dados. 
}

const login = async (req, res) => {
    const usuario = await prisma.Usuario.findMany({
        where: {
            AND: [
                { email: req.body.email },
                { senha: req.body.senha }
            ]
        }
    })
    if (usuario.length > 0){
        res.status(202).json(usuario).end();
    //     jwt.sign(data, process.env.KEY, { expiresIn: '1m' },function(err, token) {
    //         if(err == null) {
    //             data["token"] = token;
    //             res.status(200).json(data).end();
    //         }else {
    //             res.status(404).json(err).end();
    //         }
    //     })
    }else{
        res.status(404).end();
    }
}


module.exports = {
    create,
     read,
     readOne,
     update,
     remove,
     login

}