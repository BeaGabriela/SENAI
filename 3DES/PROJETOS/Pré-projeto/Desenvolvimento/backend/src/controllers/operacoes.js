const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let Operacoes= await prisma.Operacoes.create({
        data: req.body
    });

    res.status(201).json(Operacoes).end();
}

const read = async (req, res) => {
    let Operacoes = await prisma.Operacoes.findMany();

    res.status(200).json(Operacoes).end();
}

const readOne = async (req, res) => {
    let Operacoes = await prisma.Operacoes.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(Operacoes).end();
}

const update = async (req, res) => {
    const Operacoes = await prisma.Operacoes.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(Operacoes).end()
}

const remove = async(req, res) => {
    const Operacoes = await prisma.Operacoes.delete({
        where:{
            id: Number(req.params.id)
        }
    })
    res.status(200).json(Operacoes).end() //SEND não é necessario exatamente um banco de dados. 
}



module.exports = {
    create,
     read,
     readOne,
     update,
     remove

}