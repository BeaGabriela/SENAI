// var data = new Date()
// var dia = data.getFullYear()

// console.log(dia)

//     var date = new Date()
//     date.setDate(date.getDate()+1)
//     var year = date.getFullYear()
//      year.setYear(year.getDate()+1)
//     var month = date.getMonth()
//     month.setDate(month.getDate)+1

//     console.log(date, month)

function nascimentoTosco(qtd){
    let retornar = []
    for(var i=0; i<qtd; i++){
        let dia = Math.floor(Math.random() *28) +1
        let mes =  Math.floor(Math.random() *12) +1
        let ano =  Math.floor(Math.random() *(2006-1990+1)) +1990
        retornar[i] = dia + '/' + mes + '/' + ano
    }
    return retornar
}
console.log(nascimentoTosco(28))


// function nascimento(qtd)
// let retorno = []
// for( var i =0; i<qtd; i++){
//     let dia = new Date(1990, 28, 01)
//     let df = new Date (2006, 11, 30)
//    retorno[i] = new Date(dia.getTime() + Math.random() *(df.getTime() - dia.getTime()))
   
//    return retorno
    
// }
// console.log(nascimento(28))
