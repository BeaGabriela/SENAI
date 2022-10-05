var num = document.getElementById('input')
var flista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []


function isNumero(n){
if(Number(n) >= 1 && Number(n) <=100 ){
    return true
} else{
    return false
}
}
function inLista(n, l){
if(l.indexOf(Number(n)) != -1){ //! Não
    return true
}else{
    return false
}

}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) //Adiciona um valor no vetor
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`  
        flista.appendChild(item)  
        res.innerHTML =''    
    
    }else{
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de continuar.')
    }else{
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media =0

        for(let pos in valores){
            soma+= valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML +=`<p>Somando todos os valores temos como resultado ${soma}.</p>` 
        res.innerHTML += `<p>A media dos valores digitados é ${media}</p>` 
    }
}