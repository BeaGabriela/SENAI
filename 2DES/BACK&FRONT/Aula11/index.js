
function carregar(){
fetch("https://patrimoniomongo.herokuapp.com/read/")
.then(res => { return res.json()})
    .then((patrimonio) => {
        patrimonio.forEach((pat) => {
       var tabela = document.querySelector('.tabelinha')
       tabela.cloneNode(true)
       tabela.classList.remove('model')

       tabela.querySelector('#id').innerHTML = pat.id
       tabela.querySelector('#ni').innerHTML = pat.ni
       tabela.querySelector('#aquisicao').innerHTML = pat.aquisicao
       tabela.querySelector('#denominacao').innerHTML = pat.denominacao
       tabela.querySelector('#valor').innerHTML = pat.valor
       tabela.querySelector('#img').innerHTML = pat.img
       tabela.querySelector('#__v').innerHTML = pat.__v

       document.querySelector('tbody').appendChild(tabela)
       
    })
})
}