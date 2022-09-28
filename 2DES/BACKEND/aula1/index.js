const express = require('express');
const app = express();

app.use(express.json())

app.get('/projeto1', (req, res) => {
    res.json('ROI outra coisa')
})
app.listen(3000, ()=>{
    console.log('Respondendo na porta 3000')
})





//Instalar node
//Criar uma pasta
// Abri o VS
// TERMINAL
//NPM INIT 
//INSTALAR A PRIMEIRA DEPDENDIA EXPRESS(EXPRESS)