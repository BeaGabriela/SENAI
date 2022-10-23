function criarElementos(){
let itemLista = document.createElement('div')
itemLista.className = 'item-lista'

let thumb = document.createElement('img')
thumb.src = './img/restaurante.png'
thumb.id = 'img'
thumb.alt = 'foto restaurante'

let like = document.createElement('img')
like.src = './img/coracao.png'
like.id= 'like'
like.alt = 'coracao preto'

let avaliacao = document.createElement('img')
avaliacao.src = './img/estrela.png'
avaliacao.id= 'Avaliação'
avaliacao.alt = 'avaliacao'

let info = document.createElement('div')
info.id = 'info'

let nomeRes = document.createElement('p')
nomeRes.innerHTML = 'Xurumelas Bar 2.0, ' + 'Muito mais melhor do que antes'

let textAvaliacao = document.createElement('p')

textAvaliacao.appendChild(avaliacao)
textAvaliacao.append('4.9')

info.appendChild(nomeRes)
info.appendChild(textAvaliacao)

itemLista.appendChild(thumb)
itemLista.appendChild(info)
itemLista.appendChild(like)

document.querySelector('.lista').appendChild(itemLista)

var restaurante = document.getElementById('img')
var estrelinhas = document.getElementById('Avaliação');
var coração = document.getElementById('like');

}

function like(){
    var img = document.getElementById('like')
    img.setAttribute( 'src' , './img/coracao.png')
    
    
}
function voltar(){
    var img = document.getElementById('like')
    img.setAttribute( 'src' , './img/coracaopreto.png')
}

function votar(){
    var img = document.getElementById('Avaliação')
    img.setAttribute('src', './img/estrela.png')
}

function naovotar(){
    var img = document.getElementById('Avaliação')
    img.setAttribute('src', './img/estrela1.png')
}

