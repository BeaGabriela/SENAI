const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient() //Classe

const create = async (req, res) => {
    const info = req.body

    info.nascimento = new Date(req.body.nascimento)

    const funcionario = await prisma.funcionario.create({
        data: info
    })
    res.status(201).json(funcionario).end()
}

const read = async (req, res) => {
    const funcionarios = await prisma.funcionario.findMany()

    res.status(200).json(funcionarios).end()
}

const readFunc = async (req, res) => {
    const funcionarios = await prisma.funcionario.findUnique({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(funcionarios).end()
}

const update = async (req, res) => {
    const funcionarios = await prisma.funcionario.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(funcionarios).end()
}

const remove = async(req, res) => {
    const funcionario = await prisma.funcionario.delete({
        where:{
            id: Number(req.params.id)
        }
    })
    res.status(200).json(funcionario).end() //SEND não é necessario exatamente um banco de dados. 
}

module.exports = {
    create,
    read,
    update,
    remove,
    readFunc
}