const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const criar = async (req, res) => {
    
    let { titulo, categoria, relato, emergencia, latitude, longitude } = req.body;

    let criarAlerta = await prisma.alertas.create({
        data: {
            titulo: titulo,
            categoria: categoria,
            relato: relato,
            emergencia: emergencia,
            latitude: latitude,
            longitude: longitude,
            id_usuario: Number(req.params.id_usuario)
        }
    });
    res.status(201).json(criarAlerta).end();
}

const listarAlertas = async (req, res) => {
    let alertas = await prisma.alertas.findMany({
        select: {
            id: true,
            emergencia: true,
            titulo: true,
            categoria: true,
            usuario: {
                select: {
                    nome: true,
                    nome_social: true
                }
            },
            data_alerta: true,
            relato: true
        }
    });
    res.status(200).json(alertas).end();
}

const verAlerta = async (req, res) => {
    let publi = await prisma.alertas.findUnique({
        where: {
            id: Number(req.params.id) 
        },
        select: {
            emergencia: true,
            titulo: true,
            categoria: true,
            usuario: {
                select: {
                    nome: true,
                    nome_social: true
                }
            },
            data_alerta: true,
            relato: true
        }
    });
    res.status(200).json(publi).end();
}

const editarAlerta = async (req, res) => {
    let publi = await prisma.alertas.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    });
    res.status(200).json(publi).end();

}

const excluirAlerta = async (req, res) => {
    await prisma.alertas.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json("Publicação excluída").end();
}

module.exports = {
    criar,
    listarAlertas,
    verAlerta,
    editarAlerta,
    excluirAlerta
}
