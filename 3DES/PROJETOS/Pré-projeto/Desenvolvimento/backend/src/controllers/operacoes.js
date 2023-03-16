const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const {veiculo, motorista, descricao, data} = req.body
    

    const [op] = await prisma.$transaction([
        prisma.Operacoes.create({
            data:{
                veiculo: veiculo,
                motorista: motorista,
                descricao: descricao,
                data_retorno: data
            }
        }), 
        prisma.Veiculos.update({
            where: {
                id: veiculo
            },
            data: {
                uso: true
            }
        }),
        prisma.Motorista.update({
            where: {
                id: motorista
            },
            data: {
                ocupado: true
            }
        })
    ])
   



    res.status(201).json(op).end();
}

const read = async (req, res) => {
    let Operacoes = await prisma.Operacoes.findMany({
        select:{
            id:true,
            veiculo:true,    
            motorista:true,
            motoristas:{
                select:{
                    nome: true
                }
            },
            data_saida: true,
            descricao:true,
            data_retorno :true,
            relatorios:true
        }
    });

    res.status(200).json(Operacoes).end();
}

const readGrafico = async (req, res) => {
            let operacao = await prisma.$queryRaw`SELECT v.placa,  m.nome, MONTH(o.data_saida) as mes FROM operacoes o
            INNER JOIN veiculos v
            ON v.id = o.veiculo
            INNER JOIN motorista m
            ON m.id = o.motorista
            GROUP BY v.placa, MONTH(o.data_saida) ORDER BY v.placa`;

            
        
            res.status(200).json(operacao).end();
        
        // let operacao = await prisma.$queryRaw`SELECT v.placa, SUM(m.valor) as total, MONTH(m.data_inicio) as mes FROM manutencao m
        // INNER JOIN veiculos v
        // ON v.id = m.veiculo
        // GROUP BY m.veiculo, MONTH(m.data_inicio) ORDER BY v.placa`;
        // let operacao = await prisma.Operacoes.findMany({
            
        //     select:{
        //         tipos:{
        //             select:{
        //                 placa: true
        //             }
        //         },    
        //         data_saida: true,
        //         data_retorno :true,
        //         motoristas:{
        //             select:{
        //                 nome: true
        //             },
        //         }
        //     }
        // })    
    // res.status(200).json(operacao).end();
}

const parseBoolean = (b) => {
    if (b == 1)
        return true
    else
        return false
}


const readOne = async (req, res) => {
    let Operacoes = await prisma.Operacoes.findMany({
        where: {
            concluidas: parseBoolean(req.params.concluidas)
        },
            select:{
                id:true,
                veiculo:true,    
                motorista:true,
                motoristas:{
                    select:{
                        nome: true
                    }
                },
                data_saida: true,
                descricao:true,
                data_retorno :true,
                relatorios:true
            }
    });

    res.status(200).json(Operacoes).end();
}

const update = async (req, res) => {
    const [operacoes] = await prisma.$transaction([
        prisma.Operacoes.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                data_retorno:  new Date(),
                concluidas: true
            }
        }),

        prisma.Veiculos.update({
            where: {
                id: Number(req.params.veiculo)
            },
            data: {
                uso: false
            }
        }), 

        prisma.Motorista.update({
            where: {
                id: Number(req.params.motorista)
            },
            data: {
                ocupado: false
            }
        }), 
    ]);
    res.status(200).json(operacoes).end()
}

const remove = async (req, res) => {
    const Operacoes = await prisma.Operacoes.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(Operacoes).end() //SEND não é necessario exatamente um banco de dados. 
}



module.exports = {
    create,
    read,
    readOne,
    update,
    remove,
    readGrafico

}