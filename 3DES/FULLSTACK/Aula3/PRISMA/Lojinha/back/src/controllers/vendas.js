const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createVendas = async (req, res) => {
    let vendas = await prisma.Vendas.create({
        data: req.body
    });

    res.status(201).json(vendas).end();
}

const readVendas = async (req, res) => {
    let vendas = await prisma.Vendas.findMany();

    res.status(200).json(vendas).end();
}

const readOneVendas = async (req, res) => {
    let vendas = await prisma.Vendas.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(vendas).end();
}


module.exports = {
    createVendas,
    readVendas,
    readOneVendas
}

