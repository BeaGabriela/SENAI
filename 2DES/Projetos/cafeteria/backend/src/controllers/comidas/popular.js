const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let popular = await prisma.Popular.create({
        data: req.body
    });

    res.status(201).json(popular).end();
}


const read = async (req, res) => {
    let popular = await prisma.Popular.findMany({
        select: {
            id: true,
            comidas: {
                select: {
                    nome: true,
                    img: true,
                    descricao: true,
                    valor: true
                }
            }
        }
    });

    res.status(200).json(popular).end();
}

const readOne = async (req, res) => {
    let popular = await prisma.Popular.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id: true,
            comidas: {
                select: {
                    nome: true,
                    img: true,
                    descricao: true,
                    valor: true
                }
            }
        }
    });

    res.status(200).json(popular).end();
}

const update = async (req, res) => {
    const popular = await prisma.Popular.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(popular).end()
}

const remove = async (req, res) => {
    const popular = await prisma.Popular.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(popular).end() //SEND não é necessario exatamente um banco de dados. 
}


module.exports = {
    create,
    read,
    readOne,
    update,
    remove

}