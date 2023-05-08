
var multa, peso, persopermitido, excesso

persopermitido = 50
peso = 2

if (peso >= 50) {
    excesso = peso = persopermitido
    multa = excesso * 4
    console.log(`peso excede a ${excesso}, valor da multa = ${multa}}`);
}else {
    console.log('peso ok ');
}
