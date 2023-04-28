const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let marcacoes = await prisma.marcadores_mapa.create({
        data: req.body
        
    })
   
    res.status(200).json(marcacoes).end();
}

const listar = async (req, res) => {
    let marcadores = await prisma.marcadores_mapa.findMany();

    res.status(200).json(marcadores).end();
}




module.exports = {
    create,
    listar
}