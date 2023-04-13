const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const iniciar = async (req, res) => {
    res.render('index')
}

const login = async (req, res) => {
    res.redirect('/')
}

module.exports = {
    iniciar, 
    login
}