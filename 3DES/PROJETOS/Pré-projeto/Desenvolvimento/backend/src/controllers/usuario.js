const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const bcrypt = require('bcrypt')

const prisma = new PrismaClient();

const create = async (req, res) => {
    // bcrypt.genSalt(10, function (err, salt){
    //     if (err == null) {
    //         bcrypt.hash(req.body.senha, salt, async function (errCrypto, hash) {
    //             if (errCrypto == null) {
    //                 req.body.senha = hash
                    let usuario = await prisma.Usuario.create({
                        data: req.body
                    });
                    res.status(201).json(usuario).end();

    //             } else {
    //                 res.status(500).json(errCrypto).end();
    //             }
    //         })

    //     } else {
    //         res.status(500).json(err).end();
    //     }
    // })
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

const remove = async (req, res) => {
    const usuario = await prisma.Usuario.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(usuario).end() //SEND não é necessario exatamente um banco de dados. 
}

const login = async (req, res) => {
    let psw = req.body.senha // CRYPTO
    const usuario = await prisma.Usuario.findMany({
        where: {
            AND: [
                { email: req.body.email },
                { senha: req.body.senha }
            ]
        },
        select: {
            id: true,
            nome: true,
            email: true,
            niveis: {
                select: {
                    nivel: true
                }
            }
        }
    })

    if (usuario.length > 0) {
        jwt.sign(usuario[0], process.env.KEY, { expiresIn: '5m' }, function (err, token) {
            console.log(token);
            if (err == null) {
                usuario[0]["token"] = token;
                res.status(200).json(usuario[0]).end();

            } else {
                res.status(401).json(err).end();
            }
        })
    } else {
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