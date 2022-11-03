var nome = document.querySelector('#email')
var senha = document.querySelector('#senha')

function cadastrar() {
    var create = {
        'username': nome.value,
        'password': senha.value

    }


    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    options.body = JSON.stringify(create)

    fetch('https://patrimoniomongo.herokuapp.com/login', options)
        .then(response => { return response.json() })
        .then(data => {
            if (data.erro === undefined) {
                localStorage.setItem('create', JSON.stringify({ "username": data.username, 'img': data.img }))
                window.location.href = '../pagina2/index.html'
            }



        })
}