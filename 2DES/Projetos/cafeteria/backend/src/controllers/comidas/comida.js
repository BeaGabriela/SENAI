const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let comida = await prisma.Comida.create({
        data: req.body
    });

    res.status(201).json(comida).end();
}


const read = async (req, res) => {
    let comida = await prisma.Comida.findMany({
        select: {
            id: true,
            id_topico: true,
            topicos: {
                select: {
                    topico: true,
                }
            },
            img: true,
            nome: true,
            descricao: true,
            valor: true
        }

    });

    res.status(200).json(comida).end();
}

const readOne = async (req, res) => {
    let comida = await prisma.Comida.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(comida).end();
}

const update = async (req, res) => {
    const comida = await prisma.Comida.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(comida).end()
}

const remove = async (req, res) => {
    const comida = await prisma.Comida.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(comida).end() //SEND não é necessario exatamente um banco de dados. 
}


module.exports = {
    create,
    read,
    readOne,
    update,
    remove

}