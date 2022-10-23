var nome = document.querySelector('#nome')
var endereco = document.querySelector('#endereco')
var telefone = document.querySelector('#telefone')


var nomeC = document.querySelector('#nomeC')
var enderecoC = document.querySelector('#enderecoC')
var telefoneC = document.querySelector('#telefoneC')

const btCadedit = document.querySelector("#cadedit");
var editar = document.querySelector('.editar')

function carregar(){
    fetch('http://localhost:3000/locacoes/usuarios')
    .then(res =>{return res.json()})
    .then(clientes => {
        clientes.forEach(c => {
            var tabela = document.querySelector('.tabelinha').cloneNode(true);

            tabela.querySelector('#codigo').innerHTML = c.codigo
            tabela.querySelector('#nome').innerHTML = c.nome
            tabela.querySelector('#endereco').innerHTML = c.endereco
            tabela.querySelector('#telefone').innerHTML = c.telefone
            tabela.querySelector('#img').innerHTML = `<img onclick='alterar(${c.id})' src="./return.svg" height='20px'/>`
            document.querySelector('tbody').appendChild(tabela)

        })
    })
}

function devo(){
    window.location.href = '.././devolucoes/devolucaoes.html'
}

function abrirModalCadastro(){
    btCadedit.onclick = () => { cadastrar()}
    nomeC.value = ''
    enderecoC.value = ''
    telefoneC.value = ''
    editar.classList.remove('model')
}

function fecharModalCadastro(){
    editar.classList.add('model')
}



function cadastrar(){
    let body = {
        'nome': nomeC.value,
        'endereco': enderecoC.value,
        'telefone': telefoneC.value
    }

    fetch('http://localhost:3000/locacoes/usuarios', {
        "method":"POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(body)
    })
    .then(res => {return res.json()})
    .then(resp => {
        if(resp.nome !== undefined){
            alert("Cliente Cadastrado Com Sucesso !");
            window.location.reload();
        }else {
            alert("Falha ao cadastrar Cliente");
        }
     })
    }

    //Verificar se vai funcionar isso amanhã.
    function alterar(id){
        let ok = confirm('Confirma a devolução desse produto?')
        if(ok){
    let body = {
        'id': id
    }

    fetch('http://localhost:3000/locacoes/usuarios', {
        "method":"PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(body)
    })
    
    .then(res => {return res.json()})
    .then(resp => {
        if(resp.id !== undefined){
            alert("alteração feita !");
            window.location.reload();
        }else {
            alert("Falha ao alterar);
        }
    
     })
     }
    }
