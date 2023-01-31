const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient() //Classe

const create = async (req, res) => {

    const status = await prisma.statuss.create({
       data: req.body
    })
    res.status(201).json(status).end()
}

const read = async (req, res) => {
    const status = await prisma.statuss.findMany()

    res.status(200).json(status).end()
}

const readStatus = async (req, res) => {
    const status = await prisma.statuss.findUnique({
        where: {
            id_status: Number(req.params.id_status)
        }
    })

    res.status(200).json(status).end()
}

const update = async (req, res) => {
    const status = await prisma.statuss.update({
        where: {
            id_status: Number(req.params.id_status)
        },

        data: req.body
    })

    res.status(200).json(status).end()
}

const remove = async(req, res) => {
    const status = await prisma.statuss.delete({
        where:{
            id_status: Number(req.params.id_status)
        }
    })
    res.status(200).json(status).end() //SEND não é necessario exatamente um banco de dados. 
}


module.exports = {
    create,
    read,
    readStatus,
    update,
    remove
}
