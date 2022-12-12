var itemFilme = document.querySelector(".corpo")

function carregar() {
    fetch("http://localhost:5500/pirateflix")
        .then(response => {
            return response.json();
        })
        .then((data) => {
            data.forEach(cada => {

                let novoItem = itemFilme.cloneNode(true)

                novoItem.classList.remove("modelo")

                let nome = novoItem.querySelector("#nome")
                let imagem = novoItem.querySelector(".imagem")

                nome.innerHTML = cada.titulo;
                imagem.src = cada.imagem;

                document.querySelector("main").appendChild(novoItem);
            })
        })

        var cadastrar = document.querySelector('#cadastrar')
        var titulo = document.querySelector('#titulo')
        var la = document.querySelector('#lanca')
        var cat = document.querySelector('#cate')
        var car = document.querySelector('#car')

        cadastrar.addEventListener('click', () => {
            let cad = {
                "titulo": titulo.value,
                "lancamento": la.value,
                "cartaz": cat.value,
                "imagem": car.value
            }

            fetch('http://localhost:5500/pirateflix', {
                "method": 'POST',
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(cad)
            })

                .then(res => { return res.status })
                .then(resp => {
                    if (resp == 201) {
                        alert("filme Cadastrado Com Sucesso !");
                        window.location.reload();
                    } else {
                        alert("Falha ao cadastrar Solicitação");
                    }
        })
    })
}
let modal = document.querySelector("dialog")

function abrirModal(){
    modal.style.visibility = 'visible'
    modal.showModal()
}

function fecharModal(){
    modal.style.visibility = 'hidden'
    modal.close()
}

function excluirFilme(id){
    fetch('http://localhost:5500/pirateflix' + id , {
        "method": 'DELETE',
        "headers": {
            "Content-Type": "application/json"
        },
    })

        .then(res => { return res.status })
        .then(resp => {
            if (resp == 200) {
                alert("filme Excluido Com Sucesso !");
                window.location.reload();
            } else {
                alert("Falha ao cadastrar Solicitação");
            }
})
}


