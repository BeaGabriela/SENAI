const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let Relatorio_Operacao= await prisma.Relatorio_Operacao.create({
        data: req.body
    });
    
    res.status(201).json(Relatorio_Operacao).end();
}

const read = async (req, res) => {
    let Relatorio_Operacao = await prisma.Relatorio_Operacao.findMany({
        select:{
            id: true,
            operacao: true
        }
    });
    res.status(200).json(Relatorio_Operacao).end();
}


const readOne = async (req, res) => {
    let Relatorio_Operacao = await prisma.Relatorio_Operacao.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(Relatorio_Operacao).end();
}

const update = async (req, res) => {
    const Relatorio_Operacao = await prisma.Relatorio_Operacao.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(Relatorio_Operacao).end()
}

const remove = async(req, res) => {
    const Relatorio_Operacao = await prisma.Relatorio_Operacao.delete({
        where:{
            id: Number(req.params.id)
        }
    })
    res.status(200).json(Relatorio_Operacao).end() 
}



module.exports = {
    create,
     read,
     readOne,
     update,
     remove

}