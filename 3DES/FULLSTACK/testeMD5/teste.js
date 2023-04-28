
// alert(hash);
// const bcrypt = require('bcrypt')
// var bcrypt = require ('bcrypt')

function cadastrar() {
    
    var input = document.querySelector('#name')

    var valor = input.value
    var hash = CryptoJS.MD5(valor);
    
    // const saltRounds = 10;

    // bcrypt.hash(valor, saltRounds, function(err, hash) {
       alert(hash)
    // });

    // bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    //     // result == true
    //     console.log('certo')
    // });
    // bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
    //     // result == false
    //     console.log('erro')
    // });


    // const options = {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: `{"email":"lia@gmail.com","senha":"${input.value}"}`
    //   };
      
    //   fetch('http://localhost:3000/login', options)
    //     .then(response => response.json())
    //     .then(response => {

    //     })


    


    // var hash = CryptoJS.MD5(valor);

    // var decrypted = CryptoJS.enc.Utf16LE.stringify(hash);;


    // alert(hash);
    // alert(decrypted)
}
