const { PrismaClient } = require('@prisma/client');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

const prisma = new PrismaClient();

const create = async (req, res) => {
    let perfil = await prisma.Perfil.create({
        data: req.body
    });
    res.status(201).json(perfil).end();
}


const read = async (req, res) => {
    let perfil = await prisma.Perfil.findMany();

    res.status(200).json(perfil).end();
}

const readOne = async (req, res) => {
    let perfil = await prisma.Perfil.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(perfil).end();
}

const update = async (req, res) => {
    const perfil = await prisma.Perfil.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(perfil).end()
}

const remove = async (req, res) => {
    const perfil = await prisma.Perfil.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(perfil).end()
}



module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}