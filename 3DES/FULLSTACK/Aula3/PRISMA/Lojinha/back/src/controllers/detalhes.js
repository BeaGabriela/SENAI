const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let detalhe = await prisma.Detalhes.createMany({
        data: req.body
    });

    res.status(201).json(detalhe).end();
}

const read = async (req, res) => {
    let detalhe = await prisma.Detalhes.findMany();

    res.status(200).json(detalhe).end();
}

const readOne = async (req, res) => {
    let detalhe = await prisma.Detalhes.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(detalhe).end();
}


module.exports = {
    create,
    read,
    readOne
}