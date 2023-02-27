const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let motorista= await prisma.Motorista.create({
        data: req.body
    });

    res.status(201).json(motorista).end();
}

const read = async (req, res) => {
    let motorista = await prisma.Motorista.findMany();

    res.status(200).json(motorista).end();
}

const parseBoolean = (b) => {
    if (b == 1)
        return true
    else
        return false
}

const readOne = async (req, res) => {
    let motorista = await prisma.Motorista.findMany({
        where: {
            ocupado: parseBoolean(req.params.ocupado)
        }
    });

    res.status(200).json(motorista).end();
}

const update = async (req, res) => {
    const motorista = await prisma.Motorista.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(motorista).end()
}

const remove = async(req, res) => {
    const motorista = await prisma.Motorista.delete({
        where:{
            id: Number(req.params.id)
        }
    })
    res.status(200).json(motorista).end() //SEND não é necessario exatamente um banco de dados. 
}



module.exports = {
    create,
     read,
     readOne,
     update,
     remove

}