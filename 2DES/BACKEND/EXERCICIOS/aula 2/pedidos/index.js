// const express = require('express');
// const mysql = require('mysql');
// const app = express();

// const conexao = mysql.createConnection({
//     user: 'root',
//     host: 'localhost',
//     database: 'pedidos'
// });



// // app.use(express.json());  
// app.get('/pedidos', (req, res) => {

//     let nome = req.query.nome
//     let sobrenome = req.query.sobrenome
//     let endereco = req.query.endereco
//     let telefone = req.query.telefone
//     let string = `insert into clientes value(null,'${nome}', '${sobrenome}', '${endereco}')})`
//     let tele = `insert into telefones value(id,'${telefone}')`
//     conexao.query(tele, (err, result) => {
//         if (err == null) {
//             res.json("Dados recebidos com sucesso! Estamos enviando par ao nosso banco de dados. Agradecemos a compreensão.")
//         }else{
//             res.json("Dados recebidos com sucesso! Entretanto não conseguimos enviar para o banco de dados. Por que? Não sabemos. Entre em contato com o nosso suporte técnico.")

//         }
//     });
//     conexao.query(string, (err, result) => {
//         if (err == null) {
//             res.json("Dados recebidos com sucesso! Estamos enviando par ao nosso banco de dados. Agradecemos a compreensão.")
//         }else{
//             res.json("Dados recebidos com sucesso! Entretanto não conseguimos enviar para o banco de dados. Por que? Não sabemos. Entre em contato com o nosso suporte técnico.")

//         }
//     });
// });
// app.listen(3000, () => {
//     console.log('Servidor rodando na porta 3000')
// })

// const express = require('express');
// const mysql = require('mysql');
// const app = express();

// const con = mysql.createConnection({
//     user: 'root',
//     host: 'localhost',
//     database: 'pedidos'
// });

// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())


// // app.use(express.json());

// app.post('/pedidos', (req, res) => {
//     var id = -1
//     let priNome = req.body.priNome;
//     let sobrenome = req.body.sobrenome;
//     let endereco = req.body.endereco;
//     let telefones = req.body.telefones.split('\r\n');
//     let string = `insert into clientes value(null,'${priNome}','${sobrenome}','${endereco}')`;
//     con.query(string, (err, result) => {
//         if (err == null) {
//             res.json("Dados recebidos com sucesso e enviados para o nosso Banco de Dados, inclusive os telefones.");
//             id = result.insertId;
//             telefones.forEach((e) => {
//                 string = `insert into telefones values (${id}, ${e})`
//                 con.query(string, (err, result) => {
//                     if (err == null) {
//                         res.json("Telefones enviados para o banco de dados")
//                     } 
//                 })
//             });

           
//         } else {
//             res.json("Dados recebidos com sucesso, porém não conseguimos enviar para o banco de dados");

//         }

//     });
// });

// app.listen(3000, () =>{
//     console.log("Listening on port 3000")
// })


//Importa as pricipais dependências
const express = require('express'); //Habilita os verbos HTTP
const mysql = require('mysql'); //Habilita a conexão com o Banco de dados
const bodyParser = require('body-parser'); //Habilita conversão de Form POST para JSON
//Inicia a aplicação para responder as requisições
const app = express();
const cors = require('cors');

//Cria a conexão com o Banco de dados
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'pedidos'
});

app.use(cors())

//Configurações básicas da aplicação
app.use(express.json());
//Converte o corpo de um formulário recebido via post para json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Responde ao que chega pelo verbo POST e envia para o Banco de dados
app.post('/clientes', (req, res) => {
    let priNome = req.body.priNome;
    let sobrenome = req.body.sobrenome;
    let endereco = req.body.endereco;
    let telefones = req.body.telefones.split("\r\n");
    let string = `insert into clientes value(null,'${priNome}','${sobrenome}','${endereco}')`;
    let resposta = {
        dados:"Dados recebidos com sucesso"
    };
    //Preparar o envio ao Banco de Dados
    con.query(string, (err, result) => {
        if (err == null) {
            resposta.cliente = "Dados do cliente enviados com sucesso ao BD";
            //Laço para enviar os telefones
            telefones.forEach((e)=>{
                string = `insert into telefones values(${result.insertId},'${e}')`;
                con.query(string,(err, result)=>{
                    if(err == null){
                        resposta.telefones = "Tefefones enviados com sucesso ao BD";
                    }else{
                        resposta.erroTel = "Erro ao enviar telefones ao BD";
                    }
                });
            });
        } else {
            resposta.erroDB = "Erro ao enviar dados ao Banco de dados";
        }
        res.json(resposta);
    });
});

//Responde as requisições que chegam pelo verbo GET
app.get('/clientes', (req, res) => {
    let string = `Select * from clientes`;
    con.query(string,(err, result)=>{
        if(err == null){
            res.json(result);
        }
    });
});


//Inicia o túnel e ouve os verbos HTTP
app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});