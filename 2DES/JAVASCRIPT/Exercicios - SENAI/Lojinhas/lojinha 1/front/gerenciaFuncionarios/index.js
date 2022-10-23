const lista = document.querySelector('#lista-func')
const linhaModelo = document.querySelector('.linhamodelo')
const modalExcluir = document.querySelector('.excluir')
const modalEditar = document.querySelector('.editar')

const matricula = document.querySelector('#matricula')
const nome = document.querySelector('#nome')
const cargo = document.querySelector('#cargo')
const salario = document.querySelector('#salario')
const cpf = document.querySelector('#cpf')

const btCadedit = document.querySelector("#cadedit");

const btnc = document.querySelector("#cadedit")
fetch('http://localhost:3000/funcionarios')
.then(res => {return res.json()})
.then(funcionarios => {
    funcionarios.forEach(func => {
        let linha = linhaModelo.cloneNode(true)
        linha.classList.remove('model')

        let colunas = linha.querySelectorAll('td')

        colunas[0].innerHTML = func.id
        colunas[1].innerHTML = func.matricula
        colunas[2].innerHTML = func.nome
        colunas[3].innerHTML = func.cargo
        colunas[4].innerHTML = func.salario.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
        colunas[5].innerHTML = func.cpf

       linha.querySelector('#exclui').addEventListener('click', () =>{
        modalExcluir.classList.remove('model')
        modalExcluir.querySelector('#matri').innerHTML = func.matricula
       })

       linha.querySelector('#edita').addEventListener('click', ()=>{
        modalEditar.classList.remove('model')
        btnc.innerHTML = 'Editar'
        btnc.onclick = ()=>{ editarFunc() }
        matricula.value = func.matricula
        nome.value = func.nome
        cargo.value = func.cargo
        salario.value = func.salario
        cpf.value = func.cpf

       })
        lista.appendChild(linha)
    })
})

function fecharModalExcluir(){
    modalExcluir.classList.add('model')
}

function fecharModalEditar(){
    modalEditar.classList.add('model')
}

function abrirModalCadastro(){
    btnc.innerHTML = 'Cadastrar'
    btnc.onclick = ()=> {cadastrarFunc()}
    matricula.value = ''
    nome.value=''
    cargo.value=''
    salario.value = ''
    cpf.value = ''
    modalEditar.classList.remove('model')
}

function editarFunc(){
    let funci = {
        'matricula': matricula.value,
        'nome':nome.value,
        'cargo': cargo.value,
        'salario': salario.value,
        'cpf': cpf.value
    }
    fetch('http://localhost:3000/funcionarios',{
        "method":"PUT",
        "headers": {
            "Content-Type":"application/json"
        },
        "body":JSON.stringify(funci)
    })
    .then(res => {return res.json()})
    .then(resp =>{
        if(resp.matricula !== undefined){
            alert('Produto Alterado com sucesso.')
            window.location.reload()
        }else{
            alert('Falha ao salvar alterações.')
        }
    })
}

function excluirFunc() {
    let f = {
        "matricula": document.querySelector("#matricula").innerHTML
    }

    fetch("http://localhost:3000/funcionarios", {
        "method":"DELETE",
        "headers":{
            "Content-Type": "application/json"
        },
        "body":JSON.stringify(f)
    })
    .then(res => { return res.json() })
    .then(resp => {
        if(resp.matricula !== undefined) {
            alert("Funcionario Excluido Com Sucesso!");
            window.location.reload();
        }else {
            alert("Falha ao excluir funcionario !");
        }
    });
}

function cadastrarFunc() {
    let funcionario  = {
        "matricula": matricula.value,
        "nome": nome.value,
        "cargo": cargo.value,
        "salario": salario.value,
        "cpf": cpf.value
    };

    fetch("http://localhost:3000/funcionarios", {
        "method":"POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(funcionario)
    })
    .then(res => {return res.json()})
    .then(resp => {
        if(resp.matricula !== undefined){
            alert("Funcionario Cadastrado Com Sucesso !");
            window.location.reload();
        }else {
            alert("Falha ao cadastrar Funcionario");
        }
     })
}


function gerenciadorProdutos(){
    window.location.href = '.././gerenciaProds/index.html'
}

// function cpf() {
//     if(validarCpf(cpf.value)) {
//         alert("CPF Válido");
//     }else {
//         alert("CPF Inválido");
//     }
// }

// function validarCpf(cpf) {
//     if(cpf.length != 11) return false;

//     if(cpf == "11111111111"|| 
//         cpf == "22222222222" ||
//         cpf == "33333333333" ||
//         cpf == "44444444444" ||
//         cpf == "55555555555" ||
//         cpf == "66666666666" ||
//         cpf == "77777777777" ||
//         cpf == "88888888888" ||
//         cpf == "99999999999" ||
//         cpf == "00000000000" 
//      ) return false;

//     let d1 = 0, d2 = 0;
//     for(let i = 0; i <= 8; i++) {
//         d1 += cpf[i] * (i+1);
//         d2 += cpf[i] * i;
//     }

//     d1 %= 11;
//     console.log(d1);
//     if(d1 == 10) d1 = 0;
//     if(d1 != cpf[9]) return false;

//     d2 += d1 * 9;
//     d2 %= 11;
//     if(d2 == 10) d2 = 0;
//     if(d2 != cpf[10]) return false;

//     return true;
// }