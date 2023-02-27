const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let Veiculos = await prisma.Veiculos.create({
        data: req.body
    });

    res.status(201).json(Veiculos).end();
}

const read = async (req, res) => {
    let Veiculos = await prisma.Veiculos.findMany();

    res.status(200).json(Veiculos).end();
}

const parseBoolean = (b) => {
    if (b == 1)
        return true
    else
        return false
}

const readOne = async (req, res) => {
    let Veiculos = await prisma.Veiculos.findMany({
        where: {
            uso: parseBoolean(req.params.uso)
        },
        select:{
            id: true,
            placa: true,
            tipo: true           
        }
    });

    res.status(200).json(Veiculos).end();
}

const update = async (req, res) => {
    const Veiculos = await prisma.Veiculos.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(Veiculos).end()
}

const remove = async (req, res) => {
    const Veiculos = await prisma.Veiculos.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(Veiculos).end() //SEND não é necessario exatamente um banco de dados. 
}


module.exports = {
    create,
    read,
    readOne,
    update,
    remove

}