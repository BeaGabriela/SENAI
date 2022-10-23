var logins = [

    {
        'nome': 'Alexandre',
        'senha': '123456789'
    },
    {
        'nome': 'Rhysand',
        'senha': 'Velaris'
    },
    {
        'nome': 'Cassian',
        'senha': 'Nhys'
    },


]

var u = document.querySelector('main')
function entrar() {
    var name = document.querySelector('#username').value;
    var senha = document.querySelector('#senha').value;
    var alert = document.querySelector('#alerta')
    // var alterar = document.querySelector('#alterar')
    logins.forEach(login => {

        if (name.length == 0 && senha.length == 0) {
            alert.innerHTML = 'Por favor, preencha os campos acima!'
            alert.style.color = 'red'
        } else {
            if (name == login.nome && senha == login.senha) {
                window.location.href = '../entrada'
                alert.innerHTML = 'Bem-vindo!'
            } else {
                alert.innerHTML = 'Usuário Inválido.'
                alert.style.color = 'red'
            }
        }




    })




}

