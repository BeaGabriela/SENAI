const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let pedidos = await prisma.Pedidos.create({
        data: req.body
    });

    res.status(201).json(pedidos).end();
}


const read = async (req, res) => {
    let pedidos = await prisma.Pedidos.findMany({
        select: {
            id: true,
            id_comida: true,
            comidas: {
                select: {
                    nome: true,
                    valor: true
                }
            },
            tamanho: true,
            temperatura: true,
            leite: true,
            acucar: true

        }

    });

    res.status(200).json(pedidos).end();
}

const readOne = async (req, res) => {
    let pedidos = await prisma.Pedidos.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id: true,
            id_comida: true,
            comidas: {
                select: {
                    nome: true,
                    valor: true
                }
            },
            tamanho: true,
            temperatura: true,
            leite: true,
            acucar: true

        }
    });

    res.status(200).json(pedidos).end();
}

const update = async (req, res) => {
    const pedidos = await prisma.Pedidos.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(pedidos).end()
}

const remove = async (req, res) => {
    const pedidos = await prisma.Pedidos.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(pedidos).end()
}


module.exports = {
    create,
    read,
    readOne,
    update,
    remove

}