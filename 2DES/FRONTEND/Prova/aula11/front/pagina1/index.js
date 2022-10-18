
function cadastrar() {

    var nome = document.querySelector('#email')
    var senha = document.querySelector('#senha')

    var n = nome.value
    var s = senha.value

    var create = {
        'username': n,
        'password': s
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    options.body = JSON.stringify(create)

    fetch('https://patrimoniomongo.herokuapp.com/login', options)
        .then(response => response.status)
        .then(response => {
            window.location.reload()
            window.location.href = '../pagina2/index.html'

        })
}