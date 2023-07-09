function carregar(){
    var resumo = localStorage.getItem('fim')
    resumo = JSON.parse(resumo)

    console.log(resumo)
    validandoInputRetirada()
}


function validandoInputRetirada(){
    var entrega = document.querySelector('#entregar')
    var local = document.querySelector('#local')
    var retirada = document.querySelector('#retirada')

    entrega.addEventListener('change', () => {
        console.log('entrega')
    })

    local.addEventListener('input', () => {
        console.log('local')
    })

    retirada.addEventListener('input', () => {
        console.log('retirada')
    })






    
}