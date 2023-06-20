const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const read = async (req, res) => {
    let concessionaria = await prisma.Concessionaria.findMany();

    res.status(200).json(concessionaria).end();
}

const readOne = async (req, res) => {
    let concessionaria = await prisma.Concessionaria.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(concessionaria).end();
}



module.exports = {
    read,
    readOne,
}