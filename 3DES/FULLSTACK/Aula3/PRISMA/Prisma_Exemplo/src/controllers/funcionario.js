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

const read = (req, res) => {
    res.status(200).send('READ').end()
}

const update = (req, res) => {
    res.status(200).send('UPDATE').end()
}

const remove = (req, res) => {
    res.status(200).send('DELETE').end() //SEND não é necessario exatamente um banco de dados. 
}

module.exports = {
    create,
    read,
    update,
    remove
}