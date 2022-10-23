var caixa1 = document.querySelector('#caixa1')
var caixa2 = document.querySelector('#caixa2')
var caixa3 = document.querySelector('#caixa3')

var s1 = document.querySelector('.senhaV1')
var s2 = document.querySelector('.senhaV2')
var s3 = document.querySelector('.senhaV3')

var c1 = document.querySelector('#c1')
var c2 = document.querySelector('#c2')
var c3 = document.querySelector('#c3')

var numero = 1

c1.addEventListener('click', ()=>{
    caixa1.innerHTML = 'C1'
    s1.innerHTML = numero++
})

c2.addEventListener('click', ()=>{
    caixa2.innerHTML = 'C2'
    s2.innerHTML = numero++
})

c3.addEventListener('click', ()=>{
    caixa3.innerHTML = 'C3'
    s3.innerHTML = numero++
})
