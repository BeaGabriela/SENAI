function redes() {
  //preparando
  document.querySelector('#redes').style.color = 'red'
  var m = document.querySelector('.main')
  m.innerHTML = ''

  //criando tags e setando alguns styles
  var imgGit = document.createElement('img')
  imgGit.setAttribute('src', '.././img/git.png')
  imgGit.style.height = '40px';
  imgGit.style.backgroundColor = 'white';

  var img1 = document.createElement('img')
  img1.setAttribute('src', '.././img/github.jpg')
  var div = document.createElement('div')
  div.style.margin = '20vh 20vw 0 10vw'

  //colocando conteudo nas tags
  var git = document.createElement('p')
  git.innerHTML = 'GitHub'
  git.innerHTML = 'Projetos em variadas linguagens de programação.'

  div.appendChild(imgGit)
  div.appendChild(git)
  div.appendChild(img1)

  document.querySelector('.mural').appendChild(div)

  //craindo tags para o link e setando styles
  var imgLink = document.createElement('img')
  imgLink.setAttribute('src', '.././img/linkdin.png')
  imgLink.style.height = '50px';

  var linkedin = document.createElement('p')
  linkedin.innerHTML = 'Acesse aqui meu linkedlin'

  var img2 = document.createElement('img')
  img2.setAttribute('src', '.././img/github.jpg')

  var div1 = document.createElement('div')
  div1.style.margin = '20vh 10vw'

  //apendando
  div1.appendChild(imgLink)
  div1.appendChild(linkedin)
  div1.appendChild(img2)

  document.querySelector('.mural').appendChild(div1)
  document.querySelector('.mural').style.display = 'flex'
  document.querySelector('.mural').style.margin = '60x'

}

function cursos() {
  //preparando
  var m = document.querySelector('.main')
  m.innerHTML = ''

  //mudanod style
  document.querySelector('#cursos').style.color = 'red'
  //criando tags
  var divPrincipal = document.createElement('div')
  var d = document.createElement('div')
  var img = document.createElement('img')
  img.setAttribute('src', 'senai')
  var div2 = document.createElement('div')
  var desenvolvedor = document.createElement('p')
  var Cursos = document.createElement('p')
  var Eletricista = document.createElement('p')
  var d2 = document.createElement('div')
  var d3 = document.createElement('div')


  //incrementando tags
  Cursos.innerHTML = 'Cursos no SENAI:</br>'
  Eletricista.innerHTML = 'Eletricista de Manutenção Eletroeletrônica</br>'
  desenvolvedor.innerHTML = 'Técnico de Desenvolvimento de Sistemas'

  //setando clicks
  Eletricista.addEventListener('click', ()=>{
    d2.innerHTML = 'Conhecimentos:</br>'
    d2.innerHTML += '.Comandos elétricos </br>.motor trifásico, </br>.CLP, </br>.Sistemas eletronicos digitais, </br>.Sistemas eletronicos analogicos '
    d2.style= 'border: 1px solid white; width: 15vw; margin: 0vh 43vw;'
  })

  Eletricista.addEventListener('mouseout', () =>{
    d2.innerHTML = ''
    d2.style = 'none'
  })

  desenvolvedor.addEventListener('click', ()=>{
    d3.innerHTML = 'Conhecimentos:</br>'
    d3.innerHTML += '.JAVA </br>.HTML E CSS, </br>.NODE, </br>.JAVASCRIPT, </br>.Banco de Dados'
    d3.style= 'border: 1px solid white; width: 15vw; margin: 0vh 43vw;'
  })

  desenvolvedor.addEventListener('mouseout', () =>{
    d3.innerHTML = ''
    d3.style = 'none'
  })

  //apendando
  d.appendChild(img)
  d.appendChild(Cursos)
  d.appendChild(Eletricista)
  d.appendChild(d2)

  div2.appendChild(desenvolvedor)
  div2.appendChild(d3)

  divPrincipal.appendChild(d)
  divPrincipal.appendChild(div2)

  document.querySelector('.mural').appendChild(divPrincipal)

}

function limpar() {
  document.querySelector('.mural').innerHTML = ''
  document.querySelector('#cursos').style.color = 'black'
  document.querySelector('#redes').style.color = 'black'
  document.querySelector('#estudos').style.color = 'black'
  document.querySelector('#me').style.color = 'black'
  var div = document.createElement('div')

  var img = document.createElement('img')
  img.setAttribute('src', './img/eu.png')

  var p = document.createElement('p')
  p.innerHTML = 'Beatriz Gabriela'

  div.appendChild(img)
  div.appendChild(p)

  document.querySelector('.main').appendChild(div)

}

function passar() {
  document.querySelector("#fala").innerHTML = 'Clique uma vez para verificar, e dois para voltar a tela inicial.'
}

function sair() {
  document.querySelector("#fala").innerHTML = ''
}

function estudos(){
  //preparadno
  document.querySelector('#estudos').style.color = 'red'
  var m = document.querySelector('.main')
  m.innerHTML = ''
  //criar tags
  var div = document.createElement('div')
  var p = document.createElement('p')
  var p1 = document.createElement('p')

  //setando valores
  p.innerHTML = 'Cursando atualmente: </br>'
  p.innerHTML+= 'Técnico de desenvolvimento de Sistemas - SENAI </br> Previsão de conclusão: JUN./2023'

  p1.innerHTML = 'Concluido: </>'
  p1.innerHTML += ' Ensino Médio - Julia Calhau Rodrigues</br> Concluido em dez./2019'

//style
div.style= 'margin:40px 43vw; border: 1x solid white; width: 15vw;'

//apendando
  div.appendChild(p)
  div.appendChild(p1)

  document.querySelector('.mural').appendChild(div)

}

function sobremim(){
  document.querySelector('#me').style.color = 'red'
  var m = document.querySelector('.main')
  m.innerHTML = ''

  var div = document.createElement('div')
   var mus = document.createElement('p')
   var liv = document.createElement('p')
   var hob = document.createElement('p')
   var tex = document.createElement('p')
  

   mus.innerHTML = 'Músicas do momento: '
   mus.addEventListener('click', ()=>{
    window.location.href = '.././Trabalho - Music/index.html'
   })

  //Colocar o site de musica que eu fiz.

  liv.innerHTML += 'Livros do momento:'
  liv.addEventListener('click', ()=>{
    document.window.location = '..'
  })
  //Criar um, site para livros favoritos

  hob.innerHTML = 'Hobbys'
  hob.addEventListener('click', ()=>{
    var h = document.createElement('p')
    h.innerHTML = 'Tocar violão<br>Escrever histórias ficticias<br>Cozinhar<br>Ler livros<br>'
    hob.appendChild(h)
 
  hob.addEventListener('mouseout', ()=>{
    h.innerHTML = ''
    hob.appendChild(h)
  })
})


  tex.innerHTML += 'Um textinho sobre mim.'
  tex.addEventListener('click', ()=>{
    var texto = document.createEelement('p')
    p.innerHTML = 'Com esse texto, eu vim dizer um pouquinho sobre mim. Começando com algumas qualidades minhas'+
    'dentre elas estão ao pontualidade. Sou uma pesspa que sempre tentar ser pontual. '
  })

 

  div.appendChild(mus)
  div.appendChild(liv)
  div.appendChild(hob)
  div.appendChild(tex)

  document.querySelector('.mural').appendChild(div)
  div.style = 'display:flex'
  div.style.justifyContent='space-around'

}