let num = [5,8,2,9,3]
num[5] = 6;
num.push(1)
num.sort();
console.log(num)
console.log(`O Vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(2)

if(pos == -1){
    console.log('Valor não encontrado')
}else{
console.log(`O valor 2 está na posição ${pos}`)
}
// for(let i = 0; i < num.length; i++){
//     console.log(`Vetor ${num[i]}`)
// }



//Num.length() - Comprimento do vetor.
//Num.sort() - Pega todos os valores e colocar em ordem crescente.


