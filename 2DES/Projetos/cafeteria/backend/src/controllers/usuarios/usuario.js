const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const bcrypt = require('bcrypt'); // require bcrypt
const saltRounds = 10; //  Data processing speed

const prisma = new PrismaClient();

const create = async (req, res) => {
    bcrypt.hash(req.body.senha, saltRounds, async function (errCrypto, hash) {
        if (errCrypto == null) {
            req.body.senha = hash
            let user = await prisma.Usuario.create({
                data: req.body
            });
            res.status(201).json(user).end();
        }
    });
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
    res.status(200).json(usuario).end()
}

const login = async (req, res) => {
    // https://heynode.com/blog/2020-04/salt-and-hash-passwords-bcrypt/
    let pw = req.body.senha;

    const hasAccess = (result, user, res) => {
        if (result) {
            // console.log(user);
            jwt.sign(user, process.env.KEY, { expiresIn: '30m' }, function (err, token) {
                if (err == null) {
                    user["token"] = token;
                    let loginUsuario = {
                        'id': user.id,
                        'nome': user.nome,
                        'email': user.email,
                        'nivel': user.nivel,
                        'token': user.token
                    }
                    res.status(200).json(loginUsuario).end();
                } else {
                    res.status(401).json(err).end();
                    // console.log(result);
                }
            });
        }
        else {
            console.log(user.senha);
            console.log(bcrypt.hash);
            res.status(401).end();
        }
    }

    const user = await prisma.Usuario.findUnique({
        where: {
            email: req.body.email
        }
    });

    if (user != null) {
        let hash = user.senha;
        // console.log(hash);
        bcrypt.compare(pw, hash, function (err, result) {
            hasAccess(result, user, res);
            // console.log(hash)
        })
    } else {
        res.status(404).end();
    };
}


module.exports = {
    create,
    read,
    readOne,
    update,
    remove,
    login

}