const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let Topico = await prisma.Topico.create({
        data: req.body
    });

    res.status(201).json(Topico).end();
}


const read = async (req, res) => {
    let Topico = await prisma.Topico.findMany();

    res.status(200).json(Topico).end();
}

const readOne = async (req, res) => {
    let Topico = await prisma.Topico.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(Topico).end();
}

const update = async (req, res) => {
    const Topico = await prisma.Topico.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(Topico).end()
}

const remove = async (req, res) => {
    const Topico = await prisma.Topico.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(Topico).end() //SEND não é necessario exatamente um banco de dados. 
}


module.exports = {
    create,
    read,
    readOne,
    update,
    remove

}