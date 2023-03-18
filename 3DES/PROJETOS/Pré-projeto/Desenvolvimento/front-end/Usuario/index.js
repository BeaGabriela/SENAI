var deletarUser = document.querySelector('.deletarUser')
var Pdelet = document.querySelector('#deletarM')
var btnDeletar = document.querySelector('#btnDeletarUser')
var infos = document.querySelector('#info')


var bemVindo = document.querySelector('#bemVindo')

var data = new Date()
var dia = data.getDate()
var mes = data.getMonth() + 1
var ano = data.getFullYear()
var hora = data.getHours()
var minutos = data.getMinutes()
var dataCompleta = `${ano}-0${mes}-${dia}  ${hora}:${minutos}`

var user = JSON.parse(localStorage.getItem('user'))
console.log(user)


function carregar() {
    bemVindo.innerHTML = '  ' + user.nome
    bemVindo.style.color = '#000'
    newUser()

    //Text btn saida
        var textSaida = document.querySelector('#logoutt')
        var textoSair = document.querySelector('.textSair')
        textSaida.addEventListener('mouseover', () => {
            textoSair.classList.remove('model')
            textoSair.style.margin = '2px 0vw 0vw 0.7vw'
        })

        textSaida.addEventListener('mouseout', () => {
            textoSair.classList.add('model')
        })


    fetch('http://localhost:3000/usuario')
        .then(response => response.json())
        .then(response => {
            response.forEach(u => {
                var listarUser = document.querySelector('.listarUser')
                listarUser.classList.remove('model')
                var usuario = document.querySelector('.usuarios').cloneNode(true)
                usuario.classList.remove('model')

                usuario.querySelector('#id').innerHTML = u.id
                usuario.querySelector('#nome').innerHTML = u.nome
                usuario.querySelector('#email').innerHTML = u.email
                usuario.querySelector('#senha').innerHTML = '*******'
                usuario.querySelector('#funcao').innerHTML = u.funcao
                usuario.querySelector('#nivel').innerHTML = u.nivel
                let imageEdit = document.createElement("img");
                imageEdit.id = 'imgEditar';
                imageEdit.src = '../../../assets/delete.png';
                imageEdit.style.cursor = 'pointer';
                imageEdit.addEventListener('click', () => {
                    deletarUser.classList.remove('model')
                    listarUser.classList.add('model')
                    Pdelet.innerHTML = `Deseja excluir o usuário <label>${u.nome}</label>?`
                    btnDeletar.innerHTML = 'Excluir'
                    Pdelet.style.marginTop = '2vh';
                    btnDeletar.addEventListener('click', () => {
                        deletarUser.classList.remove('model')
                        listarUser.classList.add('model')

                        const options = {
                            method: 'DELETE',
                            headers: {
                              Authorization: 'Bearer ' + user.token
                            }
                          };
                          console.log(options)
                          
                          fetch(`http://localhost:3000/usuario/${u.id}`, options)
                            .then(response => response.status)
                            .then(response => {
                                if(response == 200){
                                    window.location.reload()
                                }
                            })
                    })
                })

                var sairModalUser = document.querySelector('#sairModal')
                sairModalUser.addEventListener('click', () => {
                    deletarUser.classList.add('model')
                    listarUser.classList.remove('model')
                })
                usuario.appendChild(imageEdit)
                listarUser.appendChild(usuario)
            })

        })
}

function newUser() {
    var nomeUser = document.querySelector('#nomeUser')
    var emailUser = document.querySelector('#email')
    var senha = document.querySelector('#senha')
    var cadastrarNewUser = document.querySelector('#cadastrarNewUser')
    var nivel = "Operacional"

    emailUser.addEventListener('blur', () => {
        fetch('http://localhost:3000/usuario')
        .then(response => response.json())
        .then(response => {
            response.forEach(u => {
                if(emailUser.value == u.email){
                    infos.innerHTML = "Esse email já existe nessa empresa,\n por favor tente outro!"
                    infos.style.fontSize = '11pt'
                    infos.style.marginRight = '1vw'
                    infos.style.marginTop = '1vh'
                    emailUser.value = ''
                }else if(emailUser.value != u.email){
                    infos.innerHTML = ''
                }
            })
        })
    })
    cadastrarNewUser.addEventListener('click', () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + user.token
            },
            body: `{"nome":"${nomeUser.value}","email":"${emailUser.value}","senha":"${senha.value}","funcao":"${nivel}","nivel":2}`
        };


        fetch('http://localhost:3000/usuarioCreate', options)
            .then(response => response.status)
            .then(response => {
                if (response == 201) {
                    window.location.reload()
                }else{

                }
            })

    })

}



function voltarAnterior() {
    window.history.back()
}

function logout() {
    window.localStorage.removeItem('user')
    window.location.href = '../LOGIN/login.html'
}

