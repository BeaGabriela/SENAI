const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const criar = async (req, res) => {
    res.redirect('/')
}

module.exports = {
    criar
}