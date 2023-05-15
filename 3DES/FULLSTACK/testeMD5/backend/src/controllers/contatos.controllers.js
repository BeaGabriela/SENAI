const { PrismaClient } = require('@prisma/client');
const { json } = require('express');

const prisma = new PrismaClient();

const criar = async (req, res) => {

    let parse = {
        contatante: Number(req.body.contatante),
        contatado: Number(req.body.contatado)
    };
    let reverParse = {
        contatante: Number(req.body.contatado),
        contatado: Number(req.body.contatante)
    };

    const [criarRelacionamento] = await prisma.$transaction([
        prisma.contatos.create({
            data: parse
        }),
        prisma.contatos.create({
            data:reverParse
        })
    ]);

    res.status(201).json(criarRelacionamento).end();
}


//Criando um validador de paramêtros booleans.
const parseBoolean = (b) => {
    if (b == 1)
        return true
    else
        return false
}



  
    function solicitarAmizade(usuario, callback) {
        let parse = {
            contatante: Number(req.body.contatante),
            contatado: Number(req.body.contatado),
            status: 0
        };

        let reverParse = {
            contatante: Number(req.body.contatado),
            contatado: Number(req.body.contatante),
            status: 0
        };
      
        const [criarRelacionamento] =  prisma.$transaction([
            prisma.contatos.create({
                data: parse
            }),
            prisma.contatos.create({
                data:reverParse
            })
        ]);
    
        res.status(201).json(criarRelacionamento).end();
      var pedidoAceito = parseBoolean(req.params.boolean);
  
      // Chama a função de callback, passando o status do pedido como parâmetro
      callback(pedidoAceito);
    }

//     // var pessoaEnviar =  Number(req.params.pessoa)
//     async function enviarAlerta(pessoaEnviar) {
//       // Lógica para enviar o alerta para a pessoa
//       console.log("Enviando alerta para", pessoaEnviar);
//         console.log(pessoaEnviar)
//       // Suponha que o alerta foi enviado com sucesso
//       var alertaEnviado = true;
  
//       if (alertaEnviado) {
//         // Simula um atraso de 5 segundos para aguardar a resposta da pessoa
//         await new Promise(resolve => setTimeout(resolve, 5000));
  
//         // Suponha que a pessoa tenha respondido com sucesso
//         var pessoaRespondeu = true;
  
//         if (pessoaRespondeu) {
//           // Lógica para lidar com a resposta da pessoa
//           console.log("Resposta recebida da outra pessoa.");
//           pedidoAceitoCallback()
//           // ...
//         } else {
//           console.log("A pessoa não respondeu ao alerta.");
//           // ...
//         }
//       } else {
//         console.log("Erro ao enviar o alerta para a pessoa.");
//         // ...
//       }
//     }
  
//     async function pedidoAceitoCallback() {
//       // Lógica para lidar com o pedido de amizade aceito
//       console.log("Pedido de amizade aceito");
  
//       try {
//         let parse = {
//           contatante: Number(req.body.contatante),
//           contatado: Number(req.body.contatado),
//         };
//         let reverParse = {
//           contatante: Number(req.body.contatado),
//           contatado: Number(req.body.contatante),
//         };
  
//         const [criarRelacionamento] = await prisma.$transaction([
//           prisma.contatos.create({
//             data: parse,
//           }),
//           prisma.contatos.create({
//             data: reverParse,
//           }),
//         ]);
  
//         console.log("Relacionamento criado:", criarRelacionamento);
//         res.json(criarRelacionamento);
//       } catch (error) {
//         console.error("Erro ao criar relacionamento:", error);
//         res.status(500).json({ error: "Erro ao criar relacionamento" });
//       }
//     }
  
//     function pedidoRecusadoCallback() {
//       // Lógica para lidar com o pedido de amizade recusado
//       console.log("Pedido de amizade recusado" );
//       res.json("Pedido de amizade recusado");
//     }
  
//     // Exemplo de uso
//     solicitarAmizade("usuariodestino", async function (pedidoAceito) {
//       if (pedidoAceito) {
//         await enviarAlerta("usuariodestino");
//         pedidoAceitoCallback();
//       } else {
//         pedidoRecusadoCallback();
//       }

  

const listarTodosContatos = async (req, res) => {
    let contato = await prisma.contatos.findMany({
        select: {
            id: true,
            contatantes: {
                select: {
                    id: true,
                    nome: true,
                    nome_social: true,
                    email: true,
                    telefone: true
                }
            },
            contatados: {
                select: {
                    id: true,
                    nome: true,
                    nome_social: true,
                    email: true,
                    telefone: true
                }
            }
        }
    });

    res.status(200).json(contato).end();
}

const listarMeusContatos = async (req, res) => {
    let contato = await prisma.contatos.findMany({
        where: {
            contatante: Number(req.params.contatante)
        },
        select: {
            id: true,
            contatados: {
                select: {
                    id: true,
                    nome: true,
                    nome_social: true,
                    email: true,
                    telefone: true
                }
            }
        }
    });

    res.status(200).json(contato).end();
}

const verContato = async (req, res) => {
    let contato = await prisma.contatos.findUnique({
        where: {
            id: Number(req.params.id) 
        },
        select: {
            id: true,
            contatados: {
                select: {
                    id: true,
                    nome: true,
                    nome_social: true,
                    email: true,
                    telefone: true
                }
            }
        }
    });
    res.status(200).json(contato).end();
}

const excluirContato = async (req, res) => {
    await prisma.contatos.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json("Contato deletado").end();
}

module.exports = {
    criar,
    listarTodosContatos,
    listarMeusContatos,
    verContato,
    excluirContato,
    solicitarAmizade
}