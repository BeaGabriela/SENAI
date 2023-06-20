const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let automoveis = await prisma.Automovel.create({
        data: req.body
    });
    res.status(201).json(automoveis).end();
}


const read = async (req, res) => {
    let automoveis = await prisma.Automovel.findMany();

    res.status(200).json(automoveis).end();
}

const readOne = async (req, res) => {
    let automoveis = await prisma.Automovel.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(automoveis).end();
}



module.exports = {
    create,
    read,
    readOne,
}