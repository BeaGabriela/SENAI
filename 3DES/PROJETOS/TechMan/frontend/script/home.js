function carregar() {
    fetchEquipamentos()
}

function fetchEquipamentos() {


    fetch('http://localhost:3000/equipamentos')
        .then(response => response.json())
        .then(response => {
            response.forEach(eq => {
                var equipamentos = document.querySelector(".equipamentos").cloneNode(true);
                equipamentos.classList.remove('model')


                equipamentos.querySelector("#img").src = "../assets/" + eq.imagem
                equipamentos.querySelector("#titulo").innerHTML = eq.equipamento
                equipamentos.querySelector("#descricao").innerHTML = eq.descricao
                equipamentos.innerHTML += ` <img src="../assets/comentario.png"/>`
                equipamentos.innerHTML += `   <img src="../assets/deletar.png"/>`


                document.querySelector("main").appendChild(equipamentos)
            })
        })
}