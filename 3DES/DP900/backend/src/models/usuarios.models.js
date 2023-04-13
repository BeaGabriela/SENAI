const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    nascimento: { type: Date, required: true }
})

module.exports = mongoose.model('usuarios', UsuarioSchema)