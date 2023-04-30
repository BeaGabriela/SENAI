const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto-js')



require('dotenv').config();

const prisma = new PrismaClient();
const saltRounds = 10;

const login = async (req, res) => {
    let pw = req.body.senha;

    const hasAccess = (result, usuario, res) => {
        if (result) {
            jwt.sign(usuario, process.env.KEY, { expiresIn: '15m' }, function (err, token) {
                if (err == null) {
                    usuario["token"] = token;
                    let usuarioFormatado = {
                        'id': usuario.id,
                        'nome': usuario.nome,
                        'nome_social': usuario.nome_social,
                        'token': usuario.token
                    }
                    // console.log(usuario.senha);
                    res.status(200).json(usuarioFormatado).end();
                } else {
                    res.status(401).json(err).end();
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
        let pws = crypto.MD5(pw).toString()


        bcrypt.compare(pws, hash, function (err, result) {
            console.log(pws)
            console.log(hash)

            hasAccess(result, usuario, res);
        });
    } else {
        res.status(404).end();
    }
}

// const cadastrar = async (req, res) => {
//     // obter os dados do usuário a partir do corpo da requisição (req.body)
//     // const { nome, email, senha } = req.body;

//     // criar um hash da senha usando a criptografia MD5
//     // const hashMd5 = crypto.createHash('md5').update(senha).digest('hex');

//     // criar um hash da senha criptografada com bcrypt
//     bcrypt.hash(hashMd5, saltRounds, async (err, hash) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send('Erro ao criar usuário');
//             req.body.senha = hash
//         } else {
//             try {
//                 // criar um novo usuário no banco de dados usando o Prisma ORM
//                 const novoUsuario = await prisma.usuarios.create({
//                     data: req.body
//                 });

//                 // retornar o usuário criado com sucesso
//                 res.status(201).json(novoUsuario);
//             } catch (erro) {
//                 console.log(erro);
//                 res.status(500).send('Erro ao criar usuário');
//             }
//         }
//     });
// }


const cadastrar = async (req, res) => {
    // let a = "beatriz"
    
    let crypto1 = crypto.MD5(req.body.senha).toString()
    
    req.body.senha = crypto1
    
    bcrypt.hash(req.body.senha, saltRounds, async function (errCrypto, hash) {
        if (errCrypto == null) {
             req.body.senha = hash 
             console.log(req.body.senha)
            // crypto1 = hash
            
            let user = await prisma.usuarios.create({
                data: req.body
            });
            // console.log(user)
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


const atualizarPerfil = async (req, res) => {
    let { nome, nome_social, telefone } = req.body;
    let users = await prisma.usuarios.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            nome,
            nome_social,
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
    excluirPerfil
}