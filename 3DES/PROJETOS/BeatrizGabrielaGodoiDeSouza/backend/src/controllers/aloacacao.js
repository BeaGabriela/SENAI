const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let alocacao = await prisma.Alocacao.create({
        data: req.body
    });
    res.status(201).json(alocacao).end();
}


const read = async (req, res) => {
    let alocacao = await prisma.Alocacao.findMany();

    res.status(200).json(alocacao).end();
}

const readV = async (req, res) => {
    let alocacao = await prisma.Alocacao.findMany();
  
    // Mapear as áreas e verificar a presença de veículos
    let alocacaoComVeiculos = alocacao.map(a => ({
      ...a,
      temVeiculos: a.automovel.length > 0
    }));
  
    res.status(200).json(alocacaoComVeiculos).end();
  }
  



const readOne = async (req, res) => {
    let alocacao = await prisma.Alocacao.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(alocacao).end();
}



module.exports = {
    create,
    read,
    readOne,
    readV
}