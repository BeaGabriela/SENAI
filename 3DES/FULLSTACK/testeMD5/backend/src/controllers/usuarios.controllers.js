const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto-js');

require('dotenv').config();

const prisma = new PrismaClient();
const saltRounds = 10;

const login = async (req, res) => {
    let pw = req.body.senha;

    const hasAccess = (result, usuario, res) => {
        if (result) {
            jwt.sign(usuario, process.env.KEY, { expiresIn: '15m' }, function (err, token) {
                // console.log(token);
                if (err == null) {
                    usuario["token"] = token;
                    let usuarioFormatado = {
                        'id': usuario.id,
                        'nome': usuario.nome,
                        'nome_social': usuario.nome_social,
                        'token': usuario.token
                    }
                    res.status(200).json(usuarioFormatado).end();
                } else {
                    res.status(401).json('RUIM').end();
                }
            });
        } else {
            res.status(401).end();
        }
    }

    const usuario = await prisma.usuarios.findUnique({
        where: {
            email: req.body.email
        }
    });

    if (usuario != null) {
        let hash = usuario.senha;
        let crypto1 = crypto.MD5(pw).toString();
        bcrypt.compare(crypto1, hash, function (err, result) {
            hasAccess(result, usuario, res);
        });
    } else {
        res.status(404).end();
    }
}


const cadastrar = async (req, res) => {

    let crypto1 = crypto.MD5(req.body.senha).toString();

    req.body.senha = crypto1

    bcrypt.hash(req.body.senha, saltRounds, async function (errCrypto, hash) {
        if (errCrypto == null) {
            req.body.senha = hash;
            let user = await prisma.usuarios.create({
                data: req.body
            });
            res.status(201).json(user).end();
        }
    });
}


const listarUsuarios = async (req, res) => {
    let usuario = await prisma.usuarios.findMany();

    res.status(200).json(usuario).end();
}


const verPerfil = async (req, res) => {
    let users = await prisma.usuarios.findUnique({
        where: {
            id: Number(req.params.id)
        },
    });
    res.status(200).json(users).end();
}


const verPerfilAlheio = async (req, res) => {
    let users = await prisma.usuarios.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id: true,
            nome_social: true,
            data_nascimento: true,
            // contatantes: {
            //     select: {
            //         id: true,
            //         contatante: true,
            //         contatado: true
            //     }
            // },
            contatados: {
                select: {
                    id: true,
                    contatante: true,
                    contatado: true
                }
            }
        }
    });
    res.status(200).json(users).end();
}


const atualizarPerfil = async (req, res) => {
    let { nome, nome_social, ident_genero, orientacao, telefone } = req.body;
    let users = await prisma.usuarios.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            nome,
            nome_social,
            ident_genero,
            orientacao,
            telefone
        }
    });
    res.status(200).json(users).end();

}

const atualizarDados = async (req, res) => {
    bcrypt.hash(req.body.senha, saltRounds, async (errCrypto, hash) => {
        if (errCrypto == null) {
            req.body.senha = hash
            let { email, senha } = req.body;
            let users = await prisma.usuarios.update({
                where: {
                    id: Number(req.params.id)
                },
                data: {
                    email,
                    senha
                }
            });
            res.status(200).json(users).end();
        } else { throw errCrypto }
    });
}


const excluirPerfil = async (req, res) => {
    await prisma.usuarios.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json("Usuário deletado").end();
}

module.exports = {
    login,
    cadastrar,
    listarUsuarios,
    verPerfil,
    atualizarPerfil,
    atualizarDados,
    excluirPerfil,
    verPerfilAlheio
}