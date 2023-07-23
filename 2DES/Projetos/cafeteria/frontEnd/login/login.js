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
    .then(response => response.status)
    .then(response => {
        if (response == 201) {
            window.location.href = '../HOME/index.html'
            // localStorage.setItem('fim', JSON.stringify(json))
        }else{
            console.log('erro')
        }
    })

}