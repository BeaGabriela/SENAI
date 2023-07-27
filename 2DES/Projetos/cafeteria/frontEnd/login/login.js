var altura = 0
var largura = 0
var alturaheader = document.querySelector('.oi')
// alturaheader.classList.add("descendo")
altura = window.innerWidth;
largura = window.innerHeight;

// console.log(altura, largura)

const alturaHeader = document.querySelector(".oi");

console.log(alturaHeader.getBoundingClientRect());

const propriedades = alturaHeader.getBoundingClientRect();

// // altura
const altura1 = propriedades.y;
if (alturaheader == 969) {
    altura1.classList.add('.pause')
}






function Entrar() {
    // window.location.href= '../HOME/index.html'
    var email = document.querySelector('#email')
    var senha = document.querySelector('#password')


    var info = document.querySelector('#info')

    var json = {
       "email": email.value,
       "senha": senha.value
    }

    console.log(json) 

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(json)
    };
    
    fetch('http://localhost:3000/usuario/login', options)
    .then((response) => {
        if(response.status != 200){
            info.innerHTML = 'ERRO no usuário. Tente novamente'
        }else{
            info.innerHTML = ''
            return response.json()
        }
    })
    .then((resp) => {
        if(email.value == 0 && senha.value == 0){
           info.innerHTML = 'Preencha os campos!'
        }else if(email.value != undefined && senha.value != undefined){
            if(resp.nivel == 1){
                info.innerHTML = ''
                localStorage.setItem('user', JSON.stringify(resp))
                window.location.href= '../HOME/index.html'
            }else{
                conosle.log('geremte')
            }
        }
    })

}

function esqueceuSenha(){
    var modalSenha = document.querySelector('.esqueceSenha')
    modalSenha.classList.remove('model')
}

function VoltarTelaLogin(){
    var modalSenha = document.querySelector('.esqueceSenha')
    modalSenha.classList.add('model')
}

function VoltarTelaLoginNovo(){
    var modalCadastro = document.querySelector('.cadastrarNovo')
    modalCadastro.classList.add('model')
}

function cadastrarNovoUsuario(){
    var cadastrarNovo = document.querySelector('.cadastrarNovo')
    cadastrarNovo.classList.remove('model') 
}