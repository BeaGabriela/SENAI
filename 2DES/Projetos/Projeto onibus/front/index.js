


function carregar () {
    fetch('http://localhost:3000/onibus/ladoDireito')
    .then(resp => {return resp.json()})
    .then(data => {
        data.forEach(e => {
            var oni = document.querySelector('.onibus').cloneNode(true);
            oni.classList.remove('model')
            oni.querySelector('#assento').innerHTML =` <button onclick="buscarA(${e.assentoD})">A${e.assentoD} </button>`

            document.querySelector('.aside1').appendChild(oni)
            
        })
    });

    fetch('http://localhost:3000/onibus/ladoDireito')
    .then(resp => {return resp.json()})
    .then(data => {
        data.forEach(e => {
            var oni = document.querySelector('.onibus1').cloneNode(true);
            oni.classList.remove('model')
            oni.querySelector('#assento1').innerHTML = `<button onclick="buscarB(${e.assentoD})">B${e.assentoD} </button>`

            document.querySelector('.aside2').appendChild(oni)
        })
    });

    fetch('http://localhost:3000/onibus/ladoDireito')
    .then(resp => {return resp.json()})
    .then(data => {
        data.forEach(e => {
            var oni = document.querySelector('.onibus2').cloneNode(true);
            oni.classList.remove('model')
            oni.querySelector('#assento2').innerHTML = `<button onclick="buscarC(${e.assentoD})">C${e.assentoD} </button>`

            document.querySelector('.aside3').appendChild(oni)
        })
    });

    fetch('http://localhost:3000/onibus/ladoDireito')
    .then(resp => {return resp.json()})
    .then(data => {
        data.forEach(e => {
            var oni = document.querySelector('.onibus3').cloneNode(true);
            oni.classList.remove('model')
            oni.querySelector('#assento3').innerHTML = `<button id='btn' onclick="buscarD(${e.assentoD})">D${e.assentoD} </button>`

            document.querySelector('.aside4').appendChild(oni)
        })
    });
}

var assento = document.querySelector('#assento')
var assentoPedido = document.querySelector('.assentoPedido')
function buscarA(numero){
   console.log(numero)
   assentoPedido.innerHTML = `A${numero}`
}

function buscarB(numero){
    console.log(numero)
    assentoPedido.innerHTML = `B${numero}`
 }

 function buscarC(numero){
    assentoPedido.innerHTML = `C${numero}`
 }

 function buscarD(numero){
    assentoPedido.innerHTML = `D${numero}`
 }