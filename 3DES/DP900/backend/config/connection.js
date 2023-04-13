const mongoose = require("mongoose");

const getConnectionInfo = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Conexão com o MongoDB realizada com sucesso'))
        .catch(err => console.error(err));
}

console.log(getConnectionInfo());
module.exports = {
    getConnectionInfo
}