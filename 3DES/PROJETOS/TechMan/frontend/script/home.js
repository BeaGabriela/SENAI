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
                equipamentos.querySelector('#imgComentario').addEventListener('click', () => {
                    CadastrarComentario(eq.id)
                })
                equipamentos.querySelector('#imgDeletar').addEventListener("click", () => {
                    var modelExcluir = document.querySelector('.modalExclusão')
                    modelExcluir.classList.remove('model')

                    document.querySelector('#excluir').addEventListener('click', () => {
                        const options = { method: 'DELETE' };

                        fetch(`http://localhost:3000/equipamentos/${eq.id}`, options)
                            .then(response => response.status)
                            .then(response => {
                                if (response == 200) {
                                    window.location.reload()
                                } else {
                                    console.log('erro')
                                }
                            })
                    })


                })

                document.querySelector("main").appendChild(equipamentos)
            })
        })
}

function fecharModal() {
    var modelExcluir = document.querySelector('.modalExclusão')
    modelExcluir.classList.add('model')
}

function fecharModalComentario() {
    var modelComentario = document.querySelector('.modalComentario')
    var comentarios = document.querySelector('.comentarios')
    modelComentario.classList.add('model')
    comentarios.innerHTML = ''
}

function fecharModalCadastro() {
    var modalCadastrarComentario = document.querySelector('.modalCadastrarComentario')
    modalCadastrarComentario.classList.add('model')
}

function CadastrarComentario(id) {
    console.log(id);

    var modalComentario = document.querySelector('.modalComentario')
    modalComentario.classList.remove('model')

    fetch(`http://localhost:3000/comentarios/${id}`)
        .then(response => response.json())
        .then(response => {
            response.forEach(c => {
                var comentario = document.querySelector(".comentarios").cloneNode(true);
                comentario.classList.remove('model')

                if (id === c.equipamento) {
                    comentario.querySelector('#perfil').innerHTML = c.perfils.perfil + "  " + c.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                    comentario.querySelector('#comentario').innerHTML = c.comentario


                    document.querySelector('.modalComentarioVizualização').appendChild(comentario)
                }

            })
        })
}

function abrirModalCadastroEquipamento() {
    var modalCadastro = document.querySelector('.cadastrarEquipamento')
    modalCadastro.classList.remove('model')
}

function fecharModalCadastro() {
    var modalCadastro = document.querySelector('.cadastrarEquipamento')
    modalCadastro.classList.add('model')
}