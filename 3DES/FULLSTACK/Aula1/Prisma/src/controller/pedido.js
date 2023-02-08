const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const pedido = await prisma.pedido.create({
        data: req.body
    })
    res.status(201).end();
}

const readAll = async (req, res) => {
    const pedido = await prisma.pedido.findMany({
    })
    res.json(pedido).end();
}

const read = async (req, res) => {
    const pedido = await prisma.pedido.findUnique({
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(pedido).end();
}

module.exports = {
    create,
    readAll,
    read
}