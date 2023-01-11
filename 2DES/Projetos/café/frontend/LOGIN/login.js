function validarLogin() {
    var validar = false
    var inputEmail = document.querySelector('#email')
    var inputsenha = document.querySelector('#senha')
    var info = document.querySelector('#informacoesLogin')

    fetch('http://localhost:3000/Listar')
        .then(res => res.json())
        .then(u => {
            u.forEach(login => {
                if (inputEmail.value == '' || inputsenha == '') {
                    validar
                    info.innerHTML = 'Por favor, preencha os campos acima'
                } else if (inputEmail.value != login.email && inputsenha.value != login.senha) {
                    validar
                    info.innerHTML = ''
                    info.innerHTML = 'Senha ou email incorretos'

                } else if (inputEmail.value == login.email && inputsenha.value == login.senha) {
                    info.innerHTML = 'Bem-vindo'
                    validar = true
                    inputEmail.style.border = '2px solid green'
                    inputsenha.style.border = '2px solid green'
                    localStorage.setItem('dados', login.nome, login.id_user)
                    window.location.href = '../HOME/index.html'
                }
                validar = false
            })
        })
}


function carregar() {
    var pags = document.querySelector('.Paginas')
    var pag1 = document.querySelector('.pagina1')
    var pag2 = document.querySelector('.pagina2')
    var pag3 = document.querySelector('.pagina3')
    var pag4 = document.querySelector('.pagina4')
    var btnPag1 = document.querySelector('#irPraPag2')
    var btnPag2 = document.querySelector('#irPraPag3')
    var btnPag3 = document.querySelector('#irPraPag4')
    var finalizar = document.querySelector('#finalizar')
    var criarNovoCadastro = document.querySelector('#criarNovoCadastro')

    var InputUsuario = document.querySelector('#usuario')
    var InputEmailNovo = document.querySelector('#inputEmailNovo')
    var InputSenhaNovo = document.querySelector('#inputSenhaNovo')

    // var mostrarUser = document.querySelector('#mostrarUser')
    var mostrarEmail = document.querySelector('#mostrarEmail')
    var mostrarSenha = document.querySelector('#mostrarSenha')
    var InputConfirmarSenha = document.querySelector('#confirmarSenha')

    var NomeUsario
    var email
    var senha
    var ConfirmarSenha


    // mostrarUser.value = NomeUsario






    criarNovoCadastro.addEventListener('click', () => {
        pags.classList.remove('modal')
        pag1.classList.remove('modal')

        btnPag1.addEventListener('click', () => {
            pag1.classList.add('modal')
            pag2.classList.remove('modal')
        })
        btnPag2.addEventListener('click', () => {
            pag1.classList.add('modal')
            pag2.classList.add('modal')
            pag3.classList.remove('modal')
            email = InputEmailNovo.value
            senha = InputSenhaNovo.value
            ConfirmarSenha = InputConfirmarSenha.value

            mostrarEmail.value = email
            mostrarSenha.value = senha

            console.log(mostrarEmail.value)
            console.log(mostrarSenha.value)

        })
        btnPag3.addEventListener('click', () => {
            pag1.classList.add('modal')
            pag2.classList.add('modal')
            pag3.classList.add('modal')
            pag4.classList.remove('modal')
        })

        finalizar.addEventListener('click', () => {
            NomeUsario = InputUsuario.value
            email = InputEmailNovo.value
            senha = InputSenhaNovo.value
            ConfirmarSenha = InputConfirmarSenha.value

            if (senha == ConfirmarSenha) {
                let cadastrando = {
                    'nome': NomeUsario,
                    'email': email,
                    'senha': senha
                }

                fetch('http://localhost:3000/cadastrarUser', {
                    'method': 'POST',
                    'headers': {
                        'Content-Type': 'application/json'
                    },
                    'body': JSON.stringify(cadastrando)
                })
                    .then(res => res.status )
                    .then(resp => {
                        if (resp == 201) {
             window.location.reload()
                        } else {
                            alert('erro')
                        }
                    })

            }

            
           

        })

    })
}