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

}