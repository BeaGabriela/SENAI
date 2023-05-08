

// function func1(numero){
//     if(numero == 0 ){
//         return 1
//     }else if(numero < 0){
//         return -1
//     }else{return numero*func1(numero-1)}
// }

// function inicio(){
//     var paramento = 6
//     console.log('RESULTADO ' + func1(paramento));
// }

// console.log(inicio())
// var valores= [1,2,3,4,5,6,7,8,9,10]
// for(var i=0;i<10;i++){
//     valores[i] = i*2
// }
//     console.log(valores)

var cont, n, ant, atual

a = 10
b= 0
c = a
d = 6

for(a=0; a<=4; a++){
if(b >= 0){
    b = b+d
} else if(c < (a*2) && b <10)  {
    d = d+1
}else{
    c = c+-1
}
}
console.log(a,b,c,d)