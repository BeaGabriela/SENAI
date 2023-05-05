const { PrismaClient } = require('@prisma/client');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

const prisma = new PrismaClient();

const create = async (req, res) => {
    let comentarios = await prisma.Comentarios.create({
        data: {
            comentario: req.body.comentario,
            equipamento: req.body.equipamento,
            perfil: req.body.perfil,
            data: new Date()
        }
    })

    res.status(201).json(comentarios).end();
}


const read = async (req, res) => {
    let comentarios = await prisma.Comentarios.findMany({
        select: {
            id: true,
            comentario: true,
            equipamento: true,
            perfil: true,
            perfils: {
                select: {
                    perfil: true
                }
            },
            data: true
        }
    })
    res.status(200).json(comentarios).end();
}


const readOne = async (req, res) => {
    let comentarios = await prisma.Comentarios.findMany({
        where: {
            equipamento: Number(req.params.equipamento)
        },
        select: {
            id: true,
            comentario: true,
            equipamento: true,
            perfil: true,
            perfils: {
                select: {
                    perfil: true
                }
            },
            data: true
        }
    });

    res.status(200).json(comentarios).end();
}

const update = async (req, res) => {
    const comentarios = await prisma.Comentarios.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(comentarios).end()
}

const remove = async (req, res) => {
    const comentarios = await prisma.Comentarios.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(comentarios).end()
}



module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}