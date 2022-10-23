// document.body.style.background = 'pink'
// document.body.style.color = 'white'
// // document.write("HI!")


// // //tagname, id, class

// // var texto = document.getElementsByTagName('h1')
// // var titulo = document.getElementById('titulo')

// // var aluno = {
// //     nome:'Fulano',
// //     matricula: 123456
// // }

// // titulo.innerHTML =`</br> Nome: ${aluno.nome}</br>  <strong>Nota:</strong> ${aluno.matricula}`
// // titulo.style.color = "black"
// // // titulo.style.margin = '200px'


// // var mensagem = document.getElementById('mensagem')
// // mensagem.style.display = 'block'

// // var divisao = document.getElementsByClassName('divisao')

// // document.querySelector();
// // document.querySelectorAll();
// var titulo2 = document.querySelector('#titulo')
// var div = document.querySelectorAll('.divisao')
// var msg = document.querySelector('h1')

// console.log (div)

document.body.style.background = 'pink'
var busca = document.querySelector('#busca')
var linhas = document.querySelectorAll('tr')
var res = document.getElementById('res')
var btnBuscar = document.querySelector('button')
btnBuscar = addEventListener('click', buscarNome)
busca.addEventListener('keyup', buscarNome)


function buscarNome() {
     let encontrei = false

    linhas.forEach((linha) => {
        let temp = linha.querySelector('td')
        if (temp != null) {
            //1* Tentativa:
            
            if (linha.innerHTML.toLowerCase().includes(busca.value.toLowerCase())) {
                linha.style.display = 'table-row'

              
               linha.style.color = 'red'

           } else {
               linha.style.display = 'none'
               res.innerHTML = 'Não foi possivel encontrar o valor buscado.'
              
           }

       }


   })
}
    

        //2* Tentativa:

            // if (temp.innerHTML.toLowerCase() == busca.value.toLowerCase()) {
            // res.innerHTML = `Encontrei ${busca.value}`
            //     res.style.margin = '40px 0'
            // res.style.color = 'red'
            //     encontrei = true

//             if (temp.innerHTML.toLowerCase().includes(busca.value.toLowerCase())) {
//                  linha.style.display = 'table-row'
//                 linha.style.fontWeight = 'bold'
//                 linha.style.color = 'red'

//             } else {
//                 linha.style.display = 'none'
//             }

//         }


//     })
// }
    // })


    //3* Tentaiva:
    

//     if (!encontrei) {
//         res.innerHTML = `Não Encontrei ${busca.value}`
//     }
// }
// let v1 = 1
// let v2 = '1'

// if(v1 !== v2){
//     console.log('Não Somos Iguais')

//  }