function carregar () {
    fetch('http://localhost:3000/onibus/ladoDireito')
    .then(resp => {return resp.json()})
    .then(data => {
        data.forEach(e => {
            var oni = document.querySelector('.onibus').cloneNode(true);
            oni.classList.remove('model')
            oni.querySelector('#assento').innerHTML =` <button id='btnCick' onclick="buscarA(${e.assentoD})">A${e.assentoD} </button>`

            document.querySelector('.aside1').appendChild(oni)
            
        })
    });

    fetch('http://localhost:3000/onibus/ladoDireito')
    .then(resp => {return resp.json()})
    .then(data => {
        data.forEach(e => {
            var oni = document.querySelector('.onibus1').cloneNode(true);
            oni.classList.remove('model')
            oni.querySelector('#assento1').innerHTML = `<button id='btnCick' onclick="buscarB(${e.assentoD})">B${e.assentoD} </button>`

            document.querySelector('.aside2').appendChild(oni)
        })
    });

    fetch('http://localhost:3000/onibus/ladoDireito')
    .then(resp => {return resp.json()})
    .then(data => {
        data.forEach(e => {
            var oni = document.querySelector('.onibus2').cloneNode(true);
            oni.classList.remove('model')
            oni.querySelector('#assento2').innerHTML = `<button id='btnCick' onclick="buscarC(${e.assentoD})">C${e.assentoD} </button>`

            document.querySelector('.aside3').appendChild(oni)
        })
    });

    fetch('http://localhost:3000/onibus/ladoDireito')
    .then(resp => {return resp.json()})
    .then(data => {
        data.forEach(e => {
            var oni = document.querySelector('.onibus3').cloneNode(true);
            oni.classList.remove('model')
            oni.querySelector('#assento3').innerHTML = `<button id='btnCick' onclick="buscarD(${e.assentoD})">D${e.assentoD} </button>`

            document.querySelector('.aside4').appendChild(oni)
        })
    });

}

var assento = document.querySelector('#assento')
var assentoPedido = document.querySelector('.assentoPedido')
var assentoP = ''
function buscarA(numero){
   console.log(numero)
   assentoPedido.innerHTML = `A${numero}`
   assentoP = `A${numero}`
   console.log(assentoP)
}

function buscarB(numero){
    assentoPedido.innerHTML = `B${numero}`
    assentoP = `B${numero}`
   console.log(assentoP)
   localStorage.setItem('assento', assentoP)
 }

 function buscarC(numero){
    assentoPedido.innerHTML = `C${numero}`
    assentoP = `C${numero}`
   console.log(assentoP)
   localStorage.setItem('assento', assentoP)
 }

 function buscarD(numero){
    assentoPedido.innerHTML = `D${numero}`
    assentoP = `D${numero}`
   console.log(assentoP)
   localStorage.setItem('assento', assentoP)
 }


 var back = document.querySelector('.back')
 back.addEventListener('click', () => {
    localStorage.setItem('assento', assentoP)
     window.history.back()
 })