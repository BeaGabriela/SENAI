
function carregar() {
    newMotorista = document.querySelector('#newMoorista')
    AlterarMotorista = document.querySelector('#AlterarMotorista')
    deletarMotorista = document.querySelector('#DeletarMotorista')
    var cadastrar = document.querySelector('.cadastrarMotorista')
    var alterar = document.querySelector('.alterarMotorista')
    var deletar = document.querySelector('.deletarMotorista')

    newMotorista.addEventListener('click', () => {
        cadastrar.classList.remove('model')
        alterar.classList.add('model')
        deletar.classList.add('model')
        
    })

    AlterarMotorista.addEventListener('click', () => {
        alterar.classList.remove('model')
        cadastrar.classList.add('model')
        deletar.classList.add('model')
    })

    deletarMotorista.addEventListener('click', () => {
        alterar.classList.add('model')
        cadastrar.classList.add('model')
        deletar.classList.remove('model')
    })
}