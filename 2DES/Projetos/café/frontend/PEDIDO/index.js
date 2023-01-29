var informacoesId = localStorage.getItem('informacoes')
console.log(informacoesId)

function carregar(){
    var imagemProduto = document.querySelector('#imagemP')
    var nomePedido = document.querySelector('#nomeComida')
    var descricao = document.querySelector('#detalhes')
    var select = document.querySelector('#selectT')
    var valorT = document.querySelector('#valorT')
   

    fetch('http://localhost:3000/comida')
    .then(res => { return res.json() })
    .then(p => {
        p.forEach(comida => {
            if(comida.id_comida == informacoesId ){
                console.log(comida.id_comida)
                imagemProduto.src = '../assets/' + comida.img
                nomePedido.innerHTML = comida.nome_comida
                descricao.innerHTML = comida.descricao
                
                if(select.value == p ){
                   valorT.value = comida.valor
                }
                else if(select.value == m){
                    valorT.value = Number(comida.valor) + 5 

                }else{
                    valorT.value = Number(comida.valor) + 8
                }
            }
        })
    })
}