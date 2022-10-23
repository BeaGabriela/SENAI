// function navegar(){ //Document, history e location
//     let dado = document.querySelector('#teste').value
//     console.log(dado) //
// }
//   //dan's too


//   var paragrafo = document.querySelector('#info').innerHTML

//target -- quem recebeu a aÇao
  var info = ''
  var teste = ''
document.querySelector('#teste').addEventListener('keyup', (act)=>{
//    info += act.key //tecla do clique
//   teste +='*'
//    act.target.value = teste
// console.log(act)
})

function navegar (){
   let val = document.querySelector('#teste').value

   let arrFunc = new Array()   

   let func = {
    'nome':val,
    'premios':teste,
    'cargo': {
      'nome':'gerente'
   }
  
   }

   arrFunc.push(func)

  arrFunc[0].premios.forEach(premio => {
    console.log(premio)
  })
}