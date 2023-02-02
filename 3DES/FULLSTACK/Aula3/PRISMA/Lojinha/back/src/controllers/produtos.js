const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let produtos = await prisma.Produtos.create({
        data: req.body
    });

    res.status(201).json(produtos).end();
}

const read = async (req, res) => {
    let produtos = await prisma.Produtos.findMany();

    res.status(200).json(produtos).end();
}

const readOne = async (req, res) => {
    let produtos = await prisma.Produtos.findUnique({
        where: {
            id_produto: Number(req.params.id)
        }
    });

    res.status(200).json(produtos).end();
}


module.exports = {
    create,
    read,
    readOne
}