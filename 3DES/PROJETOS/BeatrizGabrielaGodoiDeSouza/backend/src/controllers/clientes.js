const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let cliente = await prisma.Cliente.create({
        data: req.body
    });
    res.status(201).json(cliente).end();
}


const read = async (req, res) => {
    let cliente = await prisma.Cliente.findMany();

    res.status(200).json(cliente).end();
}

const readOne = async (req, res) => {
    let cliente = await prisma.Cliente.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(cliente).end();
}



module.exports = {
    create,
    read,
    readOne,
}