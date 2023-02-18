const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let Frotas= await prisma.Frotas.create({
        data: req.body
    });

    res.status(201).json(Frotas).end();
}

const read = async (req, res) => {
    let Frotas = await prisma.Frotas.findMany();

    res.status(200).json(Frotas).end();
}

const readOne = async (req, res) => {
    let Frotas = await prisma.Frotas.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(Frotas).end();
}

const update = async (req, res) => {
    const Frotas = await prisma.Frotas.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(Frotas).end()
}

const remove = async(req, res) => {
    const Frotas = await prisma.Frotas.delete({
        where:{
            id: Number(req.params.id)
        }
    })
    res.status(200).json(Frotas).end() 
}



module.exports = {
    create,
     read,
     readOne,
     update,
     remove

}