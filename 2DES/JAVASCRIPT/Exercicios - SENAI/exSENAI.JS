var placa = 'abc1234'
var cpf = '12345678901'
if(placa.length == 0 || cpf.length ==0){
    console.log('ERRO')
}else{
    if(placa.length != 7  && cpf.length != 11){
        console.log('Preste atenção, falta caracteres')
    }else{
        console.log('Blz, mano. Isso ai.')
    }
}
