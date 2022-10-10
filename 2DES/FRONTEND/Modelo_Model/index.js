const lista = document.querySelector('#lista')
const linhaModelo = document.querySelector('.linhamodelo')
const modalExcluir = document.querySelector('.excluir')
const modalEditar = document.querySelector('.editar')

const btncadedit = document.querySelector('#cadedit')

linhaModelo.querySelector('#exclui').addEventListener('click', () =>{
    modalExcluir.classList.remove('model')
    modalExcluir.querySelector('#matri').innerHTML = func.matricula
   })

   linhaModelo.querySelector('#edita').addEventListener('click', ()=>{
    modalEditar.classList.remove('model')
    btnc.innerHTML = 'Editar'
    btnc.onclick = ()=>{ editar() }
    matricula.value = func.matricula //Mude os inputs!
    nome.value = func.nome

   })

function fecharModalExcluir(){
    modalExcluir.classList.add('model')
}

function fecharModalEditar(){
    modalEditar.classList.add('model')
}

function abrirmodalCadastro(){
    btncadedit.innerHTML = 'cadastrar'
    btncadedit.onclick = () => { cadastrar()}
    //Aqui vocÊ coloca seus inputs seguido por innerHTML = '';
    modalEditar.classList.remove('model')
}

function editar(){
    let jso = {
        //Aqu vão os parametros que você vai editar.o valor do input. exepmlo: 'id': id.value;
    }
    fetch('',{
        "method":"PUT",
        "headers": {
            "Content-Type":"application/json"
        },
        "body":JSON.stringify(jso)
    })
    .then(res => {return res.json()})
    .then(resp =>{
        if(resp.jso.primeroParametro !== undefined){
            alert('Produto Alterado com sucesso.')
            window.location.reload()
        }else{
            alert('Falha ao salvar alterações.')
        }
    })
}

function excluirFunc() {
    let f = {
        "matricula": document.querySelector("#matricula").innerHTML //Parametro que vai procurar;
    }

    fetch("", {
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
    let js  = {
        "matricula": matricula.value,
    };

    fetch("", {
        "method":"POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(js)
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
