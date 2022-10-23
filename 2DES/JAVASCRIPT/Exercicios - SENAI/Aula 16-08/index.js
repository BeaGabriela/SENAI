function entrar() {
    let encontrei = false
    var email = document.getElementById('email').value
    var senha = document.getElementById('username').value
    var aviso = document.getElementById('aviso')
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json()
        })

        .then((data) => {
            data.forEach((user => {
                if (email.length == 0 && senha.length == 0) {
                    aviso.innerHTML = 'Preencha os campos acima!'
                }
                if ((email == user.email) && (senha == user.username)) {
                    //Where email = 'fulano@gmail.com' AND PSW = '.....' -- ele está procurando exatamente esse email e essa senha.
                    encontrei = true
                    aviso.innerHTML = 'Bem-vindo!'

                    var a = {
                        'id': user.id,
                        'nome': user.name
                    }

                    window.localStorage.setItem('userId', JSON.stringify(a))

                    window.location.href = 'index2.html'
                }
            }))

            if (encontrei == false) {
                alert('Login ou senha incorretos.')
            }
        })
}

function login() {
    let inf = JSON.parse(window.localStorage.getItem('userId'))
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + inf.id)
        .then((response) => {
            return response.json()
        })

        .then((data) => {
            data.forEach((post) => {
                var t = document.createElement('h2')
                t.innerHTML = post.userId
                var p = document.createElement('p')
                p.innerHTML = inf.nome

                var img = document.createElement('img')
                img.setAttribute('src', 'twiter.jpg')


                var divzinha = document.createElement('div')
                divzinha.setAttribute('id', 'cabecalho')
                divzinha.appendChild(t)
                divzinha.appendChild(p)


                var t1 = document.createElement('h2')
                t1.innerHTML = post.title
                var t2 = document.createElement('h4')
                t2.innerHTML = post.body

                var div2 = document.createElement('div')
                div2.setAttribute('id', 'div2')
                div2.appendChild(img)
                div2.appendChild(t1)
                div2.appendChild(t2)

                var btn = document.querySelector('button')
                div2.appendChild(btn)
               btn.addEventListener("click", () => {
                    window.location.href = "http://127.0.0.1:5500/correcao_ex09/comentarios/index.html?postId=" + post.id;
                })


                document.querySelector('body').append(divzinha, div2)

            })
        })
}
