const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let vendedor = await prisma.Vendedor.create({
        data: req.body
    });

    res.status(201).json(vendedor).end();
}

const read = async (req, res) => {
    let vendedor = await prisma.Vendedor.findMany();

    res.status(200).json(vendedor).end();
}

const readOne = async (req, res) => {
    let vendedor = await prisma.Vendedor.findUnique({
        where: {
            id_vendedor: Number(req.params.id)
        }
    });

    res.status(200).json(vendedor).end();
}


module.exports = {
    create,
    read,
    readOne
}