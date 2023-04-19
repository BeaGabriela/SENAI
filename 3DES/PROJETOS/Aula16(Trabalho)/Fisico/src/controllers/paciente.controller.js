const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const iniciar = async (req, res) => {
    res.render('index')
}

const criar = async (req, res) => {
    let dataAtual = new Date()
    let mes = dataAtual.getFullYear()

    let parse = {
        nome_completo: req.body.nome_completo,
        nascimento: new Date(req.body.nascimento),
        peso: Number(req.body.peso),
        altura: Number(req.body.altura)
    }



    let fisico = await prisma.Paciente.create({
        data: parse
    })

    // let a = fisico[0]["idade"] = 5



    res.json({
        nome_completo: req.body.nome_completo,
        nascimento: new Date(req.body.nascimento),
        peso: Number(req.body.peso),
        altura: Number(req.body.altura),
        "idade": Number(mes - req.body.nascimento.slice(0, 4)),
        "imc": Number(req.body.peso / (req.body.altura * req.body.altura)),
        "diagnostico": 'OK?'
    }
    )
}


const listar = async (req, res) => {
    let paciente = await prisma.Paciente.findMany()
    console.log(paciente)
    // res.json(paciente).status(200)
    res.render('index', { pacientes: paciente })
}


const filtrar = async (req, res) => {
    let fisico = await prisma.Paciente.findMany({
        where: {
            id: Number(req.params.id)
        }
    })

    res.json(fisico).status(202)
}

const alterar = async (req, res) => {
    let parse = {
        nome_completo: req.body.nome_completo,
        nascimento: new Date(req.body.nascimento),
        peso: Number(req.body.peso),
        altura: Number(req.body.altura),
        idade: Number(req.body.idade),
        imc: Number(req.body.imc),
        diagnostico: req.body.diagnostico
    }

    let fisico = await prisma.Paciente.update({
        data: parse,
        where: {
            id: Number(req.params.id)
        }
    });
    res.json(fisico).status(200)
}

const excluir = async (req, res) => {
    let fisico = await prisma.Paciente.delete({
        where: {
            id: Number(req.params.id)
        }
    });
    res.json(fisico).status(200)
}


module.exports = {
    iniciar,
    criar,
    listar,
    alterar,
    filtrar,
    excluir
}