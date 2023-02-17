const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let nivel = await prisma.nivel.create({
        data: req.body
    });

    res.status(201).json(nivel).end();
}

const read = async (req, res) => {
    let nivel = await prisma.nivel.findMany();

    res.status(200).json(nivel).end();
}

const readOne = async (req, res) => {
    let nivel = await prisma.nivel.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(nivel).end();
}

const update = async (req, res) => {
    const nivel = await prisma.nivel.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(nivel).end()
}

const remove = async(req, res) => {
    const nivel = await prisma.nivel.delete({
        where:{
            id: Number(req.params.id)
        }
    })
    res.status(200).json(nivel).end() //SEND não é necessario exatamente um banco de dados. 
}


module.exports = {
    create,
     read,
     readOne,
     update,
     remove

}