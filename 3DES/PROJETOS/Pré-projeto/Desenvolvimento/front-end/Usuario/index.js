var deletarUser = document.querySelector('.deletarUser')
var Pdelet = document.querySelector('#deletarM')
var btnDeletar = document.querySelector('#btnDeletarUser')


var bemVindo = document.querySelector('#bemVindo')

var data = new Date()
var dia = data.getDate()
var mes = data.getMonth() + 1
var ano = data.getFullYear()
var hora = data.getHours()
var minutos = data.getMinutes()
var dataCompleta = `${ano}-0${mes}-${dia}  ${hora}:${minutos}`

var usuario = JSON.parse(localStorage.getItem('user'))
console.log(usuario)


function carregar() {
    bemVindo.innerHTML = '  ' + usuario.nome
    bemVindo.style.color = '#000'
    newUser()

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
                usuario.querySelector('#senha').innerHTML = u.senha
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
                              Authorization: 'Bearer ' + usuario.token
                            }
                          };
                          
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

    cadastrarNewUser.addEventListener('click', () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + usuario.token
            },
            body: `{"nome":"${nomeUser.value}","email":"${emailUser.value}","senha":"${senha.value}","funcao":"${nivel}","nivel":1}`
        };


        fetch('http://localhost:3000/usuarioCreate', options)
            .then(response => response.status)
            .then(response => {
                if (response == 201) {
                    window.location.reload()
                }
            })

    })

}

function voltarAnterior() {
    window.history.back()
}

function logout() {
    window.localStorage.removeItem('usuario')
    window.location.href = '../LOGIN/login.html'
}

