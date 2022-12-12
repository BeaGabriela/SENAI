var itemFilme = document.querySelector(".linha")

function carregar() {
    fetch("http://localhost:5500/pirateflix")
        .then(response => {
            return response.json();
        })
        .then((data) => {
            data.forEach(cada => {

                let novoItem = itemFilme.cloneNode(true)

                novoItem.classList.remove("modelo")

                let imagem = novoItem.querySelector(".imagem")

                imagem.src =  cada.imagem;

                document.querySelector("main").appendChild(novoItem);
            })
        })
}