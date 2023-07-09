const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let finaliar = await prisma.Finalizar.create({
        data: req.body
    });

    res.status(201).json(finaliar).end();
}


const read = async (req, res) => {
    let pedidos = await prisma.Finalizar.findMany({
        select: {
            id: true,
            id_pedido: true,
            comidas: {
                select: {
                    id: true,
                    id_comida: true,
                    tamanho: true,
                    temperatura: true,
                    leite: true,
                    acucar: true
                }
            },
            id: true,
            id_pedido: true,
            entrega: true,
            pagamento: true
        }

    });

    res.status(200).json(pedidos).end();
}

const readOne = async (req, res) => {
    let pedidos = await prisma.Finalizar.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id: true,
            id_pedido: true,
            comidas: {
                select: {
                    id: true,
                    id_comida: true,
                    tamanho: true,
                    temperatura: true,
                    leite: true,
                    acucar: true
                }
            },
            id: true,
            id_pedido: true,
            entrega: true,
            pagamento: true
        }
    });

    res.status(200).json(pedidos).end();
}

const update = async (req, res) => {
    const pedidos = await prisma.Finalizar.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(pedidos).end()
}

const remove = async (req, res) => {
    const pedidos = await prisma.Finalizar.delete({
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