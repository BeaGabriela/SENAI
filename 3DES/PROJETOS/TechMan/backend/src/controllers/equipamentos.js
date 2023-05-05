const { PrismaClient } = require('@prisma/client');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

const prisma = new PrismaClient();

const create = async (req, res) => {
    let equipamentos = await prisma.Equipamentos.create({
        data: {
        equipamento: req.body.equipamento,
        imagem: req.body.imagem,
        descricao: req.body.descricao,
        ativo: req.body.ativo,
        data:new Date()
    }
       
    });
    res.status(201).json(equipamentos).end();
}


const read = async (req, res) => {
    let equipamentos = await prisma.Equipamentos.findMany();

    res.status(200).json(equipamentos).end();
}

const readOne = async (req, res) => {
    let equipamentos = await prisma.Equipamentos.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(equipamentos).end();
}

const update = async (req, res) => {
    const equipamentos = await prisma.Equipamentos.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(equipamentos).end()
}

const remove = async (req, res) => {
    const equipamentos = await prisma.Equipamentos.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(equipamentos).end()
}



module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}