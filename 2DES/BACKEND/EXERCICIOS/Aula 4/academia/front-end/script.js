
function view(){
    var lista = document.querySelector('.container')
   var form = document.querySelector('form')
   var lista = document.querySelector('.con')
    
    fetch('http://localhost:5000/academia/alunos')
    .then((resposta) =>{
        return resposta.json()
    })

    .then((data) =>{
        data.forEach(item =>{

           var novo = lista.cloneNode(true)
           var div = document.createElement('div')
        
           novo.querySelector('#id').innerHTML = item.id_aluno
           novo.querySelector('#nome').innerHTML = item.nome
           novo.querySelector('#nascimento').innerHTML = item.nascimento
           novo.querySelector('#sexo').innerHTML = item.sexo
           novo.querySelector('#peso').innerHTML = item.peso
           novo.querySelector('#telefones').innerHTML = item.telefones

           div.appendChild(novo)

         form.appendChild(div)
          form.style =  'display: flex; flex-wrap: wrap; width:35vw; text-align: center; justify-content: center; margin:8% 30%;'
          div.style.border= '1px solid #001'
          div.style.margin= '10px'
        })
        })

    
}

function fichas(){
    var form = document.querySelector('form')
    var lista = document.querySelector('.con')
   var main = document.querySelector('main')
    
    fetch('http://localhost:5000/academia/vw_fichas')
    .then((resposta) =>{
        return resposta.json()
    })

    .then((data) =>{
        data.forEach(item =>{

           var novo = lista.cloneNode(true)
           var div = document.createElement('div')
        
           novo.querySelector('#id1').innerHTML = item.id_aluno
           novo.querySelector('#nome1').innerHTML = item.nome
           novo.querySelector('#id_e').innerHTML = item.id_exercicio
           novo.querySelector('#dia').innerHTML = item.dia_semana
           novo.querySelector('#ficha').innerHTML = item.fichas

           div.appendChild(novo)

         main.appendChild(div)
         main.style =  'display: flex; flex-wrap: wrap; width:35vw; text-align: center; justify-content: center; margin:8% 30%;'
         div.style.border= '1px solid #001'
         div.style.margin= '10px'
         form.innerHTML = ''
        })
    })
    }

    function Exercicio(){
        var lista = document.querySelector('.c')
           var a = document.querySelector('#a')
            
            fetch('http://localhost:5000/academia/vw_exercicio')
            .then((resposta) =>{
                return resposta.json()
            })
        
            .then((data) =>{
                data.forEach(item =>{
        
                   var novo = lista.cloneNode(true)
                   var div = document.createElement('div')
                
                   novo.querySelector('#id2').innerHTML = item.id_exercicio
                   novo.querySelector('#dia_semana').innerHTML = item.dia_semana
                   novo.querySelector('#serie').innerHTML = item.serie
                   novo.querySelector('#descricao').innerHTML = item.descricao
                   novo.querySelector('#grupo_muscular').innerHTML = item.grupo_muscular
                   novo.querySelector('#id_exercicio').innerHTML = item.Exercicio
        
                   div.appendChild(novo)
        
                 a.appendChild(div)
                 a.style =  'display: flex; flex-wrap: wrap; width:35vw; text-align: center; justify-content: center; margin:8% 30%;'
                 div.style.border= '1px solid #001'
                 div.style.margin= '10px'
                })
            })
            }