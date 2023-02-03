const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createVendas = async (req, res) => {
    let vendass = await prisma.Vendas.create({
        data: {
            id_vendedores: req.body.id_vendedores
        }
    });
    console.log(vendass);
    let info = req.body.detalhes;
    info.forEach(i => {
        i.id_venda = parseInt(vendass.id)
    });
    
    let detalhes = await prisma.Detalhes.createMany({
        data: info
    });
    res.status(201).json(detalhes).end();
}

const readVendas = async (req, res) => {
    let vendas = await prisma.Vendas.findMany({
        select:{
            id:true,
            data:true,
            id_vendedores:true,
            detalhes:true
        }
    });
    res.status(200).json(vendas).end();
}


const readOneVendas = async (req, res) => {
    let vendas = await prisma.Vendas.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(vendas).end();
}

const remove = async(req, res) => {
    const vendas = await prisma.Vendas.delete({
        where:{
            id: Number(req.params.id)
        }
    })
    res.status(200).json(vendas).end() //SEND não é necessario exatamente um banco de dados. 
}

module.exports = {
    createVendas,
    readVendas,
    readOneVendas,
    remove
}

