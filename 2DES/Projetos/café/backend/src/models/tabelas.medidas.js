const readMedidas = () => {
    return 'SELECT * FROM medidas;'
}

const readleite = () => {
    return 'SELECT * FROM leite;'
}

const readTemperatura = () => {
    return 'SELECT * FROM temperatura;'
}

const readAcucar = () => {
    return 'SELECT * FROM adocar;'
}

module.exports = {
    readMedidas,
    readAcucar,
    readleite,
    readTemperatura
}