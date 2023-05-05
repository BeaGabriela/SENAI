function carregar() {
    fetchEquipamentos()
    configuraçãoUsuario()
}

function configuraçãoUsuario(){
    
}


function fetchEquipamentos() {
    fetch('http://localhost:3000/equipamentos')
        .then(response => response.json())
        .then(response => {
            response.forEach(eq => {

                var idEqui = 0
                var equipamentos = document.querySelector(".equipamentos").cloneNode(true);
                equipamentos.classList.remove('model')
                equipamentos.querySelector("#img").src = "../assets/" + eq.imagem
                equipamentos.querySelector("#titulo").innerHTML = eq.equipamento
                equipamentos.querySelector("#descricao").innerHTML = eq.descricao
                equipamentos.querySelector('#imgComentario').addEventListener('click', () => {
                    idEqui = 0
                    idEqui = eq.id
                    VizualizarComentarios(idEqui)

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

function VizualizarComentarios(id) {
    console.log(id)

    var modalComentario = document.querySelector('.modalComentario')
    modalComentario.classList.remove('model')

    modalComentario.innerHTML = `<div class="modalComentarioVizualização">
    <p id="fecharComentario" onclick="fecharModalComentario()">X</p>
    <h3 id="comentarioTexto">Comentários</h3>
    <div class="comentariosV model ">
        <h3 id="perfil"></h3>
        <p id="comentario"></p>
    </div>
</div>
`
    fetch(`http://localhost:3000/comentarios/${id}`)
        .then(response => response.json())
        .then(response => {
            response.forEach(c => {
                var comentarios = document.querySelector('.comentariosV').cloneNode(true)
                comentarios.classList.remove('model')
  
                    console.log(c);
                    comentarios.querySelector('#perfil').innerHTML = c.perfils.perfil + "  " + c.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                    comentarios.querySelector('#comentario').innerHTML = c.comentario
                    comentarios.innerHTML += `<button id="Adicionar" onclick="cadastrarNovoComentario(${id})">Adicionar Comentário</button>`


                    document.querySelector('.modalComentarioVizualização').appendChild(comentarios)
               
            })
            var comentarios = document.querySelector('.comentariosV').cloneNode(true)
            comentarios.classList.remove('model')

            comentarios.innerHTML = `<button id="Adicionar" onclick="cadastrarNovoComentario(${id})">Adicionar Comentário</button>`
            document.querySelector('.modalComentarioVizualização').appendChild(comentarios)

        })










}

function cadastrarNovoComentario(id) {
    console.log(id)
    var idE = Number(id)
    var modalCadastrarComentario = document.querySelector('.modalCadastrarComentario')
    modalCadastrarComentario.classList.remove('model')

    var inputComentario = document.querySelector('#newComentario')
    var btnCadastrar = document.querySelector("#cadastrar")

    btnCadastrar.addEventListener('click', () => {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"comentario":"${inputComentario.value}","equipamento":${idE},"perfil":1}`
        };

        fetch('http://localhost:3000/comentariosCreate', options)
            .then(response => response.status)
            .then(response => {
                if (response == 201) {
                    window.location.reload();
                }
            })
    })
}

function abrirModalCadastroEquipamento() {
    var modalCadastro = document.querySelector('.cadastrarEquipamento')
    modalCadastro.classList.remove('model')

    var inputNome = document.querySelector('#nome')
    var inputImagem = document.querySelector('#imagem')
    var inputdescricao = document.querySelector('#Idescricao')
    var inputAtivo = document.querySelector('#Ativo')

    var valueCheckbox = 0

    var btncadastrarEquipamento = document.querySelector("#cadastrarEquipamento")

    inputAtivo.addEventListener('change', () => {
        if (inputAtivo.checked) {
            console.log('O checkbox foi selecionado.')
            valueCheckbox = 1
        } else {
            console.log('O checkbox não foi selecionado.')
            valueCheckbox = 0
        }
    })

    btncadastrarEquipamento.addEventListener('click', () => {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"equipamento":"${inputNome.value}","imagem":"${inputImagem.value}","descricao":"${inputdescricao.value}","ativo":${valueCheckbox}}`
        };

        console.log(options)

        fetch('http://localhost:3000/equipamentosCreate', options)
            .then(response => response.status)
            .then(response => {
                if (response == 201) {
                    window.location.reload();
                }
            })
    })








}

function fecharModal() {
    var modelExcluir = document.querySelector('.modalExclusão')
    modelExcluir.classList.add('model')
}

function fecharModalComentario() {
    var modelComentario = document.querySelector('.modalComentario')
    var comentarios = document.querySelector('.comentariosV')
    comentarios.innerHTML = ` <div class="comentariosV model ">
    <h3 id="perfil"></h3>
    <p id="comentario"></p>
</div>`
    modelComentario.classList.add('model')


}

function fecharModalNovoCadastro() {
    var modalCadastrarComentario = document.querySelector('.modalCadastrarComentario')
    modalCadastrarComentario.classList.add('model')
}

function fecharModalCadastro() {
    var modalCadastrarComentario = document.querySelector('.modalCadastrarComentario')
    modalCadastrarComentario.classList.add('model')
}

function fecharModalCadastro() {
    var modalCadastro = document.querySelector('.cadastrarEquipamento')
    modalCadastro.classList.add('model')
}


function logout() {
    window.localStorage.removeItem('usuario')
    window.location.href = '../pages/login.html'
}
