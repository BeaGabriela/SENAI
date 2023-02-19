const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const info = req.body

    info.data_retorno = new Date(req.body.data_retorno)

    let operacao = await prisma.Operacoes.create({
        data: info
    })



    res.status(201).json(operacao).end();
}

const read = async (req, res) => {
    let Operacoes = await prisma.Operacoes.findMany({
        select:{
            id:true,
            veiculo:true,    
            motorista:true,
            data_saida: true,
            descricao:true,
            data_retorno :true,
            relatorios:true
        }
    });

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

const remove = async (req, res) => {
    const Operacoes = await prisma.Operacoes.delete({
        where: {
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