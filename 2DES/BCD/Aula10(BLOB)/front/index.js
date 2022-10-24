var ModalCadastro = document.querySelector('.modal')
var avatarBase64 = null;

function carregar() {
    fetch('http://localhost:4500/clientes')
        .then(resp => { return resp.json() })
        .then(clientes => {
            clientes.forEach(c => {
                let body = document.querySelector('body')
                let div = document.createElement("div")

                let divPrincipal = document.createElement("div")
                divPrincipal.setAttribute('id', 'divizinha')

                let login = document.createElement("p")
                let nome = document.createElement("p")
                let nascimento = document.createElement("p")
                let telefone = document.createElement("p")
                let img = document.createElement("img");
                img.setAttribute('id', 'avatar')
                let img2 = document.createElement("img");

                img2.setAttribute('src', '../docs/assets/x.png')
                img2.setAttribute('id', 'x')

                let data = new Date(c.nascimento)

                login.innerHTML = '<strong>Login:</strong> ' + c.login
                nome.innerHTML = '<strong>Nome:</strong> ' + c.nome
                nascimento.innerHTML += '<strong>Nascimento:</strong> ' + data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split(" ")[0]
                telefone.innerHTML = '<strong>Telefone:</strong> ' + c.telefone
                img.setAttribute('src', c.avatar == 'null' ? '../docs/assets/default.png' : `data:image/png;base64,${c.avatar}`);

                div.appendChild(login)
                div.appendChild(nome)
                div.appendChild(nascimento)
                div.appendChild(telefone)

                divPrincipal.appendChild(div)
                divPrincipal.appendChild(img)
                divPrincipal.appendChild(img2)

                body.appendChild(divPrincipal)
            })
        })
}


function FecharModalCadastro() {
    document.querySelector('.modal').classList.add('model');

}

function abrirModal() {
    ModalCadastro.classList.remove('model');
    document.querySelector('.cadastro').classList.remove('model');
    var btnC = document.querySelector('#cadastra')

    var login = document.querySelector('#login')
    var nome = document.querySelector('#nome')
    var nas = document.querySelector('#nas')
    var tel = document.querySelector('#tel')
    var img = document.querySelector('#fileCreate')

    btnC.addEventListener('click', () => {
        const usuarios = {
            'login': login.value,
            'nome': nome.value,
            'nascimento': nas.value,
            'telefone': tel.value,
            'avatar': avatarBase64
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuarios)
        };
        fetch('http://localhost:4500/clientes', options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 201)
                    window.location.reload();
                else
                    alert("Erro ao enviar dados para o servidor, erro: "+resp)
            })
            .catch(err => console.error(err));
    });
}

const toBase64create = () => {
    let file = document.querySelector("#fileCreate")['files'][0];
    let fr = new FileReader();
    fr.onload = function () {
        avatarBase64 = fr.result.replace("data:", "").replace(/^.+,/, "");
        ModalCadastro.imagem.src = `data:image/png;base64,${avatarBase64}`;
    }
    fr.readAsDataURL(file);
}
