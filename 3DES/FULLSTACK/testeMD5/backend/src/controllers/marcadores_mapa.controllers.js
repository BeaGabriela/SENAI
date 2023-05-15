const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

//Criar novo
const create = async (req, res) => {
    let marcacoes = await prisma.marcadores_mapa.create({
        data: req.body
    })

    res.status(201).json(marcacoes).end();
}

//Listar todos
const listar = async (req, res) => {
    let marcadores = await prisma.marcadores_mapa.findMany();

    res.status(200).json(marcadores).end();
}

//Listar unico
const filtrar = async (req, res) => {
    let marcadoresUnico = await prisma.marcadores_mapa.findMany({
        where:{
            id: Number(req.params.id)
        }
    })
    res.status(200).json(marcadoresUnico).end();
}

//Alterar
const alterar = async(req, res) => {
    const  marcacoes = await prisma.marcadores_mapa.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(marcacoes).end()
}

//Apagar
const apagar = async (req, res) => {
    const marcacoes = await prisma.marcadores_mapa.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(marcacoes).end() 
}


module.exports = {
    create,
    listar,
    filtrar,
    alterar,
    apagar

    

}