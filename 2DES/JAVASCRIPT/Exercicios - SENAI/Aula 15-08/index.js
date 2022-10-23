var usuarios = [
    {
        'nome':'Fulano',
        'img':'http://',
        'login':'fulano',
        'senha': '12345'
    }
]
function salvar() {
    let infoUser = {
        'id': 'abc1234',
        'nome': 'Beltrano',
        'avatar': 'http://'
    }
    let infoTexto = JSON.stringify(infoUser)

    window.localStorage.setItem('userData', infoTexto)

}

function carregar() {
    let info = window.localStorage.getItem('userData')
    let objUser = JSON.parse(info)
    console.log(objUser);
    console.log(info)

}

function apagar(){
    window.localStorage.removeItem('userData')
    window.localStorage.clear()

}

function login(){
    let usuario = 'fulano'
    let senha = '12345'

    usuarios.forEach(user=>{
        if(user.login == usuario && user.senha == senha) {
            console.log(user)
            window.localStorage.setItem('userData', JSON.stringify(user))
        }
    })
}

