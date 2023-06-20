const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();


const create = async (req, res) => {
   let vendas = await prisma.Vendas.create({
       data: req.body
    });
    res.status(201).json(vendas).end();
  };


const read = async (req, res) => {
    let vendas = await prisma.Venda.findMany();

    res.status(200).json(vendas).end();
}

const readOne = async (req, res) => {
    let vendas = await prisma.Venda.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(vendas).end();
}

const update = async (req, res) => {
    const vendas = await prisma.Venda.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(vendas).end()
}

const remove = async (req, res) => {
    const vendas = await prisma.Venda.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(vendas).end()
}



module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}