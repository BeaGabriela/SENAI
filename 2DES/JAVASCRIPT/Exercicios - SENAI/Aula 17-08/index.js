function carregar(){
var CEP = document.querySelector('#cep').value

    fetch('https://viacep.com.br/ws/'+ CEP + '/json/' ) //API serviço de codigo que vai responder o link
            .then(response => {
                return response.json()
            })
            .then(data => {

                  CEP = data.cep
                  document.querySelector('#logradouro').value = data.logradouro
                  document.querySelector('#complemento').value = data.complemento
                  document.querySelector('#bairro').value = data.bairro
                  document.querySelector('#cidade').value= data.localidade
                  document.querySelector('#estado').value = data.uf
                
                  

                })
            
}

function cadatrar(){
var aviso = document.querySelector('#aviso');
var nome = document.getElementById('nome').value
var email = document.getElementById('email').value
var senha = document.getElementById('senha').value
var Rsenha = document.getElementById('RepetirSenha').value
var telefone = document.getElementById('telefone').value


    if(telefone.length == 0 && nome.length == 0 && senha.length == 0 && Rsenha.length == 0 && email.length == 0){
        aviso.innerHTML = 'Preencha os campos acima!'
    }else{
    if( Rsenha == senha ){
       aviso.innerHTML = 'Cadastro feito com sucesso.'
    }else{
        aviso.innerHTML = 'Senha incorreta!'
    }
}
}






// function AtualizaCampos(conteudo) {
//     if (!('erro' in conteudo)) {
//         logradouro.value = conteudo.logradouro
//         comple.value = conteudo.comple
//         bairro.value = conteudo.bairro
//         cidade.value = conteudo.cidade
//         estado.value = conteudo.estado
//     } else {
//         alert('nao encontrado')
//         limpaFormCEP()
//     }
// }


// function pesquisa(valor) {
//    
//              cep = valor.replace(/\D/g, '')

//                 if (cep != '') {
//                     var validarcep = /^[0-9]{8}$/

//                     if (validarcep.test(cep)) {
//                         logradouro.value = '..'
//                         bairro.value = '...'
//                         cidade.value = '...'
//                         estado.value = '...'

//                         var script = document.createElement('script')
//                         script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback'
//                         console.log(script)
//                         // document.body.appendChild(script)
//                     } else {
//                         limpaFormCEP()
//                         alert("Formato de CEP inválido.")
//                     }

//                 } else {
//                     limpaFormCEP()
//                 }
//             })
//         })
// }




// function cadatrar() {

// }







// function limpaFormCEP() {
//     logradouro.value = ''
//     comple.value = ''
//     bairro.value = ''
//     cidade.value = ''
//     estado.value = ''
// }