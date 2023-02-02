const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let setor = await prisma.Setor.create({
        data: req.body
    });

    res.status(201).json(setor).end();
}

const read = async (req, res) => {
    let setor = await prisma.Setor.findMany();

    res.status(200).json(setor).end();
}

const find = async (req, res) => {
    let setor = await prisma.setor.findMany({
        where: {
            id_setor: Number(req.params.id)
        },
        select: {
            nome: true,
            comissao: true,
            produtos: {
                select: {
                    nomeProduto: true,
                    valorProduto: true
                }
            },
            vendedor: true
        }
    });
    res.status(200).json(setor).end();
}


module.exports = {
    create,
    read,
    find
}