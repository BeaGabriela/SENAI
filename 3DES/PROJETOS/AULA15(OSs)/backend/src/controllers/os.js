const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const criar = async (req, res) => {
    res.redirect('/')
}
const alterar = async (req, res) => {
    res.redirect('/')
}
const concluir = async (req, res) => {
    res.redirect('/')
}
const excluir = async (req, res) => {
    res.redirect('/')
}

module.exports = {
    criar,
    alterar,
    concluir,
    excluir
}