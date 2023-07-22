const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const create = async (req, res) => {
    try {
      // Valide e saneie os dados do corpo da requisição
      const { id_usuario, id_comida, tamanho, temperatura, leite, acucar, valorTotal } = req.body;
  
      if (!id_usuario || !id_comida || !tamanho || !temperatura || !leite || !acucar || !valorTotal) {
        // Se algum campo obrigatório estiver faltando, retorne uma resposta de requisição inválida (400)
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
      }
  
      // Crie o novo registro de Pedidos
      const novoPedido = await prisma.Pedidos.create({
        data: {
          id_usuario,
          id_comida,
          tamanho,
          temperatura,
          leite,
          acucar,
          valorTotal,
        },
      });
  
      // Envie o objeto de pedidos criado como resposta JSON
      res.status(201).json(novoPedido);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  };
  

const read = async (req, res) => {
    let pedidos = await prisma.Pedidos.findMany({
        select: {
            id: true,
            id_comida: true,
            comidas: {
                select: {
                    nome: true,
                    valor: true
                }
            },
            tamanho: true,
            temperatura: true,
            leite: true,
            acucar: true

        }

    });

    res.status(200).json(pedidos).end();
}

const readOne = async (req, res) => {
    let pedidos = await prisma.Pedidos.findMany({
        where: {
            id_cliente: Number(req.params.id)
        },
        select: {
            id: true,
            id_comida: true,
            comidas: {
                select: {
                    nome: true,
                    img: true,
                    valor: true
                }
            },
            tamanho: true,
            temperatura: true,
            leite: true,
            acucar: true,
            valorTotal: true

        }
    });

    res.status(200).json(pedidos).end();
}

const update = async (req, res) => {
    const pedidos = await prisma.Pedidos.update({
        where: {
            id: Number(req.params.id)
        },

        data: req.body
    })

    res.status(200).json(pedidos).end()
}

const remove = async (req, res) => {
    const pedidos = await prisma.Pedidos.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(pedidos).end()
}


module.exports = {
    create,
    read,
    readOne,
    update,
    remove

}