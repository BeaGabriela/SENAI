const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const criar = async (req, res) => {
    let parse = {
        comentario: req.body.comentario,
        os: Number(req.body.os),
        colaborador: Number(req.body.colaborador)
    }
    let os = await prisma.os.create({
        data: parse
    })
    res.redirect('/?msg=OS Comentário postado com sucesso!')
}


module.exports = {
    criar
}