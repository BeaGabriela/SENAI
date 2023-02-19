const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let Relatorio_Manutencao= await prisma.Relatorio_Manutencao.create({
        data: req.body
    });

    res.status(201).json(Relatorio_Manutencao).end();
}

const read = async (req, res) => {
    let Relatorio_Manutencao = await prisma.Relatorio_Manutencao.findMany({
        select:{
            id: true,
            manutencao: true
        }
    });

    res.status(200).json(Relatorio_Manutencao).end();
}

const readOne = async (req, res) => {
    let Relatorio_Manutencao = await prisma.Relatorio_Manutencao.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(Relatorio_Manutencao).end();
}

const update = async (req, res) => {
    const Relatorio_Manutencao = await prisma.Relatorio_Manutencao.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(Relatorio_Manutencao).end()
}

const remove = async(req, res) => {
    const Relatorio_Manutencao = await prisma.Relatorio_Manutencao.delete({
        where:{
            id: Number(req.params.id)
        }
    })
    res.status(200).json(Relatorio_Manutencao).end() 
}



module.exports = {
    create,
     read,
     readOne,
     update,
     remove

}