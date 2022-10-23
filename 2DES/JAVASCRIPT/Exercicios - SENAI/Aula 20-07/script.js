// Ex 1:
// var a = 1
// var b = 1
// var c = 3

// if(a== b && b ==c){
//     console.log("Equilátero")
// }else if(a !=b && b !=c){
//     console.log("Escaleno")
// }else{
//     console.log("Isósceles")
// }




// Ex 2:
    var salarios = [3000, 2000, 1000]
    salarios.forEach(salario => {
        if(salario <= 1900){
            console.log('Não é necessário pagar imposto de renda')
        } else if (salario < 2826){
           var  s = salario - (7.50*100)
            console.log(`O IRRF a ser pago vai ser de ${s}`)
        } else if (salario < 3751){
            var sa = salario - (15 *100)
            console.log(`O IRRF a ser pago vai ser de ${sa}`)
        } else if(salario < 4664){
            var sala = salario - (22,50 *100)
            console.log(`O IRRF a ser pago vai ser de ${s}`)
        } else{
            var salar = salario - (27,50*100)
            console.log(`O IRRF a ser pago vai ser de ${salar}`)
        }
    })
    // var irrf = salarios[0] - 675.13
    // var pagarI = salarios[0] - irrf
    // console.log(`O imposto de renda vai ser de:  ${pagarI.toFixed(2)}`)

    // var irrf = salarios[1] - 142.80
    // var pagar2 = salarios[1] - irrf
    // console.log(`O imposto de renda vai ser de: ${pagar2.toFixed(2)}`)

    // var irrf3 = salarios[2]
    // console.log('Não é necessario pagar imposto de renda.')



    // var arr = [1,2,3];


    // arr.forEach((val, indice) => {
    //     console.log(indice, val);
    // });