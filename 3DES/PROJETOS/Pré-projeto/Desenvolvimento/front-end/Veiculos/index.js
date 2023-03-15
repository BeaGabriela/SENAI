var deleterMotorista = document.querySelector('.deletarMotorista')
var Pdelet = document.querySelector('#deletarM')
var btnDeletarMotorista = document.querySelector('#btnDeletarMotorista')
var alterarNome = document.querySelector('#alterarNome')
var infosPlacas = document.querySelector('#infosPlacas')
var infos = document.querySelector('#info')

var bemVindo = document.querySelector('#bemVindo')

var data = new Date()
var dia = data.getDate()
var mes = data.getMonth() + 1
var ano = data.getFullYear()
var hora = data.getHours()
var minutos = data.getMinutes()
var dataCompleta = `${ano}-0${mes}-${dia}  ${hora}:${minutos}`

var usuario = JSON.parse(localStorage.getItem('user'))
console.log(usuario)


function carregar() {
    bemVindo.innerHTML = '  ' + usuario.nome
    bemVindo.style.color = '#000'
    Motoristas()

    Veiculos()

    var textSaida = document.querySelector('#logoutt')
    var textoSair = document.querySelector('.textSair')
    textSaida.addEventListener('mouseover', () => {
        textoSair.classList.remove('model')
        textoSair.style.margin = '2px 0vw 0vw 0.7vw'
    })

    textSaida.addEventListener('mouseout', () => {
        textoSair.classList.add('model')
    })
}

function logout() {
    window.localStorage.removeItem('usuario')
    window.location.href = '../LOGIN/login.html'
}


function ValidarPlaca(placa) {
    var inputPlaca = document.querySelector('#PlacaVeiculo')
    placa = inputPlaca.value

    if (placa.length == 7) {
        let modelAntigo = /^[a-zA-Z]{3}[0-9]{4}$/
        let modelAtual = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/

        if (modelAntigo.test(placa) || modelAtual.test(placa)) {
            infosPlacas.innerHTML = ''
        } else {

            infosPlacas.innerHTML ='A placa digitada é inválida'
            infosPlacas.style.marginTop = '1vh'

        }
    } else {
        infosPlacas.innerHTML ='A placa digitada é inválida'
        infosPlacas.style.marginTop = '2vh'
    }

}

function Veiculos() {
    var veiculo = document.querySelector('.ListarVeiculos')
    veiculo.classList.remove('model')

    var filtroVeiculos = document.querySelector('#definindoFiltro')
    fetchVeiculos('')
    filtroVeiculos.addEventListener('change', () => {
        if (filtroVeiculos.value == 1) {
            veiculo.innerHTML = ` <div class="listarVeiculos model">
            <label>Id:</label>
            <p id="Id_Veiculos"></p>
            <label>Placa:</label>
            <p id="placa"></p>
            <label>Tipo:</label>
            <p id="tipoVeiculo"></p>
        </div>`
            valorFiltro = 1
            fetchVeiculos(1)
        } else if (filtroVeiculos.value == 0) {
            veiculo.innerHTML = ` <div class="listarVeiculos model">
            <label>Id:</label>
            <p id="Id_Veiculos"></p>
            <label>Placa:</label>
            <p id="placa"></p>
            <label>Tipo:</label>
            <p id="tipoVeiculo"></p>
        </div>`
            valorFiltro = 0
            fetchVeiculos(0)
        } else if (filtroVeiculos.value == 3) {
            veiculo.innerHTML = ` <div class="listarVeiculos model">
            <label>Id:</label>
            <p id="Id_Veiculos"></p>
            <label>Placa:</label>
            <p id="placa"></p>
            <label>Tipo:</label>
            <p id="tipoVeiculo"></p>
        </div>`
            fetchVeiculos('')
        }

    })


    var btnCadatsrarVeiculo = document.querySelector('#newVeiculo')
    var cadastrarVeiculo = document.querySelector('.cadastrarVeiculos')
    var btnCadatsroVeiculos = document.querySelector('#cadastrarVeiculo')

    btnCadatsrarVeiculo.addEventListener('click', () => {
        veiculo.classList.add('model')
        cadastrarVeiculo.classList.remove('model')
        var inputPlaca = document.querySelector('#PlacaVeiculo')
        var inputTipo = document.querySelector('#Tipo')
        btnCadatsroVeiculos.addEventListener('click', () => {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + usuario.token
                },
                body: `{"placa":"${inputPlaca.value}","tipo":${inputTipo.value}}`
            };

            fetch('http://localhost:3000/veiculos', options)
                .then(response => response.status)
                .then(response => {
                    if (response == 201) {
                        window.location.reload();
                    }
                })
        })
    })


}

function fetchVeiculos(valorFiltro) {
    var veiculo = document.querySelector('.ListarVeiculos')
    veiculo.classList.remove('model')
    var deletarVeiculos = document.querySelector('.deletarVeiculos')
    var delVeiculos = document.querySelector('#deletarVeiculo')
    var btnDeletarVeiculos = document.querySelector('#btnDeletarVeiculos')


    fetch(`http://localhost:3000/veiculos/${valorFiltro}`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.forEach(v => {
                var sairModal = document.querySelector('#sairModal')
                if (v.uso == false) {
                    var veiculosCLone = document.querySelector('.listarVeiculos').cloneNode(true)
                    veiculosCLone.classList.remove('model')
                    veiculosCLone.querySelector('#Id_Veiculos').innerHTML = v.id
                    veiculosCLone.querySelector('#placa').innerHTML = v.placa
                    veiculosCLone.querySelector('#tipoVeiculo').innerHTML = v.tipo

                    let imageEdit = document.createElement("img");
                    imageEdit.id = 'imgEditar';
                    imageEdit.src = '../../../assets/delete.png';
                    imageEdit.style.cursor = 'pointer';
                    imageEdit.addEventListener("click", () => {
                        deletarVeiculos.classList.remove('model')
                        veiculo.classList.add('model')
                        delVeiculos.innerHTML = `Tem certeza que deseja excluir o VEICULO PLACA <label>${v.placa}</label> de ID: <label>${v.id}</label>?`
                        btnDeletarVeiculos.innerHTML = "Excluir"
                        btnDeletarVeiculos.addEventListener('click', () => {

                            const options = {
                                method: 'DELETE',
                                headers: {
                                    Authorization: 'Bearer ' + usuario.token
                                }
                            };

                            fetch(`http://localhost:3000/veiculos/${v.id}`, options)
                                .then(response => response.status)
                                .then(response => {
                                    if (response == 200) {
                                        window.location.reload()
                                    }
                                })
                        })
                    })
                     sairModal.addEventListener('click', () => {
                        deletarVeiculos.classList.add('model')
                        veiculo.classList.remove('model')
                    })


                    veiculosCLone.appendChild(imageEdit)
                    veiculo.appendChild(veiculosCLone)
                } else {
                    var veiculosCLone = document.querySelector('.listarVeiculos').cloneNode(true)
                    veiculosCLone.classList.remove('model')
                    veiculosCLone.style.border = ' 1px solid #a9a9a9'
                    veiculosCLone.querySelector('#Id_Veiculos').innerHTML = v.id
                    veiculosCLone.querySelector('#placa').innerHTML = v.placa
                    veiculosCLone.querySelector('#tipoVeiculo').innerHTML = v.tipo

                    let imageEdit = document.createElement("img");
                    imageEdit.id = 'imgEditar';
                    imageEdit.src = '../../../assets/excluir.png';
                    imageEdit.style.cursor = 'pointer';
                    imageEdit.addEventListener("click", () => {
                        deletarVeiculos.classList.remove('model')
                        veiculo.classList.add('model')
                        delVeiculos.innerHTML = `Não é possivel excluir um veiculo ocupado!`
                        btnDeletarVeiculos.innerHTML = 'Fechar'
                        btnDeletarVeiculos.style.marginTop = '2vh';
                        btnDeletarVeiculos.addEventListener('click', () => {
                            deletarVeiculos.classList.add('model')
                            veiculo.classList.remove('model')
                        })
                    })
                    veiculosCLone.appendChild(imageEdit)
                    veiculo.appendChild(veiculosCLone)
                }
            })
        })
}

function Motoristas() {
    var listarMotorista = document.querySelector('.listarMotoristas')
    listarMotorista.classList.remove('model')

    var filtroMotoristas = document.querySelector('#filtroMotorista')
    fetchMotoristas('')
    filtroMotoristas.addEventListener('change', () => {
        if (filtroMotoristas.value == 1) {
            listarMotorista.innerHTML = `<div class="cloneModalMotoristas model">
                        <label>Id:</label>
                        <p id="id_Motorista">Motoristas</p>
                        <label>Nome:</label>
                        <p id="nomeMotorista">Motoristas</p>
                    </div> `
            valorFiltro = 1
            fetchMotoristas(1)
        } else if (filtroMotoristas.value == 0) {
            listarMotorista.innerHTML = `<div class="cloneModalMotoristas model">
                        <label>Id:</label>
                        <p id="id_Motorista">Motoristas</p>
                        <label>Nome:</label>
                        <p id="nomeMotorista">Motoristas</p>
                    </div>`
            valorFiltro = 0
            fetchMotoristas(0)
        } else if (filtroMotoristas.value == 3) {
            listarMotorista.innerHTML = `<div class="cloneModalMotoristas model">
                        <label>Id:</label>
                        <p id="id_Motorista">Motoristas</p>
                        <label>Nome:</label>
                        <p id="nomeMotorista">Motoristas</p>
                    </div>`
            fetchMotoristas('')
        }

    })

    //Motoristas
    var newMotorista = document.querySelector('#newMotorista')
    var cadastrarMotorista = document.querySelector('.cadastrarMotorista')
    newMotorista.addEventListener('click', () => {
        var motoristaInput = document.querySelector('#cadastrarNome')
        var btnCadastrarMotorista = document.querySelector('#cadastrarMotorista')
        cadastrarMotorista.classList.remove('model')
        listarMotorista.classList.add('model')
        deleterMotorista.classList.add('model')

        btnCadastrarMotorista.addEventListener('click', () => {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + usuario.token
                },
                body: `{"nome":"${motoristaInput.value}"}`
            };
            fetch('http://localhost:3000/motorista', options)
                .then(response => response.status)
                .then(response => {
                    if (response == 201) {
                        window.location.reload()
                    }
                })
        })
    })

}

function fetchMotoristas(motoristas) {
    var listarMotorista = document.querySelector('.listarMotoristas')
    listarMotorista.classList.remove('model')

    fetch(`http://localhost:3000/motorista/${motoristas}`)
        .then(response => response.json())
        .then(response => {
            response.forEach(f => {
                if (f.ocupado == false) {
                    var sairModal = document.querySelector('#sairModalMotorista')
                    var listarClone = document.querySelector('.cloneModalMotoristas').cloneNode(true)
                    listarClone.classList.remove('model')

                    listarClone.querySelector('#id_Motorista').innerHTML = f.id
                    listarClone.querySelector('#nomeMotorista').innerHTML = f.nome
                    let imageEdit = document.createElement("img");
                    imageEdit.id = 'imgEditar';
                    imageEdit.src = '../../../assets/delete.png';
                    imageEdit.addEventListener("click", () => {
                        deleterMotorista.classList.remove('model')
                        listarMotorista.classList.add('model')
                        Pdelet.innerHTML = `Tem certeza que deseja excluir o <label>MOTORISTA</label> ${f.nome} de <label>ID:</label> ${f.id}?`
                        btnDeletarMotorista.innerHTML = 'Excluir'
                        btnDeletarMotorista.addEventListener('click', () => {
                            const options = {
                                method: 'DELETE',
                                headers: {
                                    Authorization: 'Bearer ' + usuario.token
                                }
                            }

                            fetch(`http://localhost:3000/motorista/${f.id}`, options)
                                .then(response => response.status)
                                .then(response => {
                                    if (response == 200) {
                                        window.location.reload();
                                    }
                                })
                        })
                    })

                    sairModal.addEventListener('click', () => {
                        deleterMotorista.classList.add('model')
                        listarMotorista.classList.remove('model')
                    })

                    listarClone.appendChild(imageEdit)
                    listarMotorista.appendChild(listarClone)
                } else {
                    var listarClone = document.querySelector('.cloneModalMotoristas').cloneNode(true)
                    listarClone.classList.remove('model')
                    listarClone.style.border = '1px solid #a9a9a9'

                    listarClone.querySelector('#id_Motorista').innerHTML = f.id
                    listarClone.querySelector('#nomeMotorista').innerHTML = f.nome
                    let imageEdit = document.createElement("img");
                    imageEdit.id = 'imgEditar';
                    imageEdit.src = '../../../assets/excluir.png';
                    imageEdit.style.cursor = 'pointer';
                    imageEdit.addEventListener("click", () => {
                        deleterMotorista.classList.remove('model')
                        listarMotorista.classList.add('model')
                        Pdelet.innerHTML = `Não é possivel excluir um MOTORISTA ocupado!`
                        btnDeletarMotorista.innerHTML = 'Fechar'
                        Pdelet.style.marginTop = '2vh';
                        btnDeletarMotorista.addEventListener('click', () => {
                            deleterMotorista.classList.add('model')
                            listarMotorista.classList.remove('model')
                        })
                    })
                    listarClone.appendChild(imageEdit)
                    listarMotorista.appendChild(listarClone)
                }

            })
        })

}


function fecharModalCadastrar() {
    var cadastrarVeiculo = document.querySelector('.cadastrarVeiculos')
    cadastrarVeiculo.classList.add('model')
    var veiculo = document.querySelector('.ListarVeiculos')
    veiculo.classList.remove('model')
}

function fecharModalCadastrarMotorista() {
    var cadastrarMotorista = document.querySelector('.cadastrarMotorista')
    cadastrarMotorista.classList.add('model')
    var listarMotorista = document.querySelector('.listarMotoristas')
    listarMotorista.classList.remove('model')
}

function voltarAnterior() {
    window.history.back()
}



