
var bemVindo = document.querySelector('#bemVindo')

var data = new Date()
var dia = data.getDate()
var mes = data.getMonth() + 1
var ano = data.getFullYear()
var hora = data.getHours()
var minutos = data.getMinutes()
var dataCompleta = `${ano}-0${mes}-${dia}  ${hora}:${minutos}`

var usuario = JSON.parse(localStorage.getItem('user'))


function carregar() {
    bemVindo.innerHTML = '  ' + usuario.nome
    bemVindo.style.color = '#000'
    
    Veiculos()
    Motoristas()
}




function Veiculos() {
    var veiculo = document.querySelector('.ListarVeiculos')
    // veiculo.classList.remove('model')

    var filtroVeiculos = document.querySelector('#definindoFiltro')
    fetchVeiculos('')
    filtroVeiculos.addEventListener('change', () => {
        if (filtroVeiculos.value == 1) {
            veiculo.innerHTML = `<div class="listarVeiculos model">
            <label>Id:</label>
            <p id="Id_Veiculos"></p>
            <label>Placa:</label>
            <p id="placa"></p>
            <label>Modelo:</label>
            <p id="modelop"></p>
            <label>Tipo:</label>
            <p id="tipoVeiculo"></p>
        </div>`
            valorFiltro = 1
            fetchVeiculos(1)
        } else if (filtroVeiculos.value == 0) {
            veiculo.innerHTML = `<div class="listarVeiculos model">
            <label>Id:</label>
            <p id="Id_Veiculos"></p>
            <label>Placa:</label>
            <p id="placa"></p>
            <label>Modelo:</label>
            <p id="modelop"></p>
            <label>Tipo:</label>
            <p id="tipoVeiculo"></p>
        </div>`
            valorFiltro = 0
            fetchVeiculos(0)
        } else if (filtroVeiculos.value == 3) {
            veiculo.innerHTML = `<div class="listarVeiculos model">
            <label>Id:</label>
            <p id="Id_Veiculos"></p>
            <label>Placa:</label>
            <p id="placa"></p>
            <label>Modelo:</label>
            <p id="modelop"></p>
            <label>Tipo:</label>
            <p id="tipoVeiculo"></p>
        </div>`
            fetchVeiculos('')
        }

    })
}

function fetchVeiculos(valorFiltro) {
    var veiculo = document.querySelector('.ListarVeiculos')
    // veiculo.classList.remove('model')

    fetch(`http://localhost:3000/veiculos/${valorFiltro}`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.forEach(v => {
                if (v.uso == false) {
                    var veiculosCLone = document.querySelector('.listarVeiculos').cloneNode(true)
                    veiculosCLone.classList.remove('model')
                    veiculosCLone.querySelector('#Id_Veiculos').innerHTML = v.id
                    veiculosCLone.querySelector('#placa').innerHTML = v.placa
                    veiculosCLone.querySelector('#modelop').innerHTML = v.modelo
                    veiculosCLone.querySelector('#tipoVeiculo').innerHTML = v.tipo + '-'+ v.tipos.tipo 

                    
                    veiculo.appendChild(veiculosCLone)
                } else {
                    var veiculosCLone = document.querySelector('.listarVeiculos').cloneNode(true)
                    veiculosCLone.classList.remove('model')
                    veiculosCLone.style.border = ' 1px solid #a9a9a9'
                    veiculosCLone.querySelector('#Id_Veiculos').innerHTML = v.id
                    veiculosCLone.querySelector('#placa').innerHTML = v.placa
                    veiculosCLone.querySelector('#modelop').innerHTML = v.modelo
                    veiculosCLone.querySelector('#tipoVeiculo').innerHTML = v.tipo + '-'+ v.tipos.tipo 

                  
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
            listarMotorista.innerHTML = ` <div class="cloneModalMotoristas model">
            <label>Id:</label>
            <p id="id_Motorista">Motoristas</p>
            <label>Nome:</label>
            <p id="nomeMotorista">Motoristas</p>
            <label>CPF:</label>
            <p id="CPFmotorista">Motoristas</p>
            <label>CNH:</label>
            <p id="CNHMotorista">Motoristas</p>
        </div> `
            valorFiltro = 1
            fetchMotoristas(1)
        } else if (filtroMotoristas.value == 0) {
            listarMotorista.innerHTML = ` <div class="cloneModalMotoristas model">
            <label>Id:</label>
            <p id="id_Motorista">Motoristas</p>
            <label>Nome:</label>
            <p id="nomeMotorista">Motoristas</p>
            <label>CPF:</label>
            <p id="CPFmotorista">Motoristas</p>
            <label>CNH:</label>
            <p id="CNHMotorista">Motoristas</p>
        </div>`
            valorFiltro = 0
            fetchMotoristas(0)
        } else if (filtroMotoristas.value == 3) {
            listarMotorista.innerHTML = ` <div class="cloneModalMotoristas model">
            <label>Id:</label>
            <p id="id_Motorista">Motoristas</p>
            <label>Nome:</label>
            <p id="nomeMotorista">Motoristas</p>
            <label>CPF:</label>
            <p id="CPFmotorista">Motoristas</p>
            <label>CNH:</label>
            <p id="CNHMotorista">Motoristas</p>
        </div>`
            fetchMotoristas('')
        }

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
                    var listarClone = document.querySelector('.cloneModalMotoristas').cloneNode(true)
                    listarClone.classList.remove('model')

                    listarClone.querySelector('#id_Motorista').innerHTML = f.id
                    listarClone.querySelector('#nomeMotorista').innerHTML = f.nome
                    listarClone.querySelector('#CPFmotorista').innerHTML = f.cpf
                    listarClone.querySelector('#CNHMotorista').innerHTML = f.cnh
                    
                    listarMotorista.appendChild(listarClone)
                } else {
                    var listarClone = document.querySelector('.cloneModalMotoristas').cloneNode(true)
                    listarClone.classList.remove('model')
                    listarClone.style.border = '1px solid #a9a9a9'

                    listarClone.querySelector('#id_Motorista').innerHTML = f.id
                    listarClone.querySelector('#nomeMotorista').innerHTML = f.nome
        
                    listarMotorista.appendChild(listarClone)
                }

            })
        })

}

function voltarAnterior() {
    window.history.back()
}

function logout() {
    window.localStorage.removeItem('usuario')
    window.location.href = '../LOGIN/login.html'
}







