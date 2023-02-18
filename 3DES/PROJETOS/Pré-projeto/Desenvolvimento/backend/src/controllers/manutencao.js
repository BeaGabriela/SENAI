const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let Manutencao= await prisma.Manutencao.create({
        data: req.body
    });

    res.status(201).json(Manutencao).end();
}

const read = async (req, res) => {
    let Manutencao = await prisma.Manutencao.findMany();

    res.status(200).json(Manutencao).end();
}

const readOne = async (req, res) => {
    let Manutencao = await prisma.Manutencao.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(Manutencao).end();
}

const update = async (req, res) => {
    const Manutencao = await prisma.Manutencao.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(Manutencao).end()
}

const remove = async(req, res) => {
    const Manutencao = await prisma.Manutencao.delete({
        where:{
            id: Number(req.params.id)
        }
    })
    res.status(200).json(Manutencao).end() 
}



module.exports = {
    create,
     read,
     readOne,
     update,
     remove

}