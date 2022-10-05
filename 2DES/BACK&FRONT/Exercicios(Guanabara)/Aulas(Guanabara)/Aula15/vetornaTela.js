//let valores = [8,1,7,4,2,9]
// for(var num =0; num<valores.length;num++){
//     console.log(`A posição ${num} tem o valor ${valores[num]}`)
// }

let valores = [8,1,7,4,2,9]
for (let num  in valores ){ // - For simplificado. 
    console.log(`A posição ${num} tem o valor ${valores[num]}`)
    num.indexOf(7)
}
