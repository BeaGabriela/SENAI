
function carregar() {
    fetch('http://localhost:4500/clientes')
        .then(resp => { return resp.json() })
        .then(clientes => {
            clientes.forEach(c => {
                let main = document.querySelector('.main')
                let div = document.createElement("div")

                let login = document.createElement("p")
                let nome = document.createElement("p")
                let nascimento = document.createElement("p")
                let telefone = document.createElement("p")
                let img = document.createElement("img");
                img.style.height = '50px';
                img.style.width = '50px';

                login.innerHTML = c.login
                nome.innerHTML = c.nome
                nascimento.innerHTML = c.nascimento
                telefone.innerHTML = c.telefone
                img.setAttribute('src', montaImg(c.avatar));

                div.appendChild(login)
                div.appendChild(nome)
                div.appendChild(nascimento)
                div.appendChild(telefone)
                div.appendChild(img)

                

                main.appendChild(div)
               



            })
        })
}

function montaImg(img) {
    if (img != null) {
        return `data:image/png;base64,${img}`;
    } else
        return `../docs/assets/default.png`;
}