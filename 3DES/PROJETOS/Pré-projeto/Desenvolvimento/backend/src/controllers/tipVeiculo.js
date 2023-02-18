const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let Tipo_Veiculos = await prisma.Tipo_Veiculos.create({
        data: req.body
    });

    res.status(201).json(Tipo_Veiculos).end();
}

const read = async (req, res) => {
    let Tipo_Veiculos = await prisma.Tipo_Veiculos.findMany();

    res.status(200).json(Tipo_Veiculos).end();
}

const readOne = async (req, res) => {
    let Tipo_Veiculos = await prisma.Tipo_Veiculos.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(Tipo_Veiculos).end();
}

const update = async (req, res) => {
    const Tipo_Veiculos = await prisma.Tipo_Veiculos.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(Tipo_Veiculos).end()
}

const remove = async(req, res) => {
    const Tipo_Veiculos = await prisma.Tipo_Veiculos.delete({
        where:{
            id: Number(req.params.id)
        }
    })
    res.status(200).json(Tipo_Veiculos).end() //SEND não é necessario exatamente um banco de dados. 
}


module.exports = {
    create,
     read,
     readOne,
     update,
     remove

}