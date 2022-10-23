const e = require("express");

const clientes = (lista) => {
    lista.forEach(e => {
        e.telefones = [];
        let tel = {};
        tel.tipo = e.tipo;
        tel.numero = e.telefone;
        e.telefones.push(tel);
        delete e.tipo;
        delete e.telefone;
    });
    // Abstração(Separa um código gigante em vários menores.) - DECOMPOR
    //Criar uma nova lista sem os dados duplicados(Comparando o próximo item com o anterior);
    let aux = []; //Lista auxiliar;
    let lip = 0; //Ultimo indice liAux
    aux.push(lista[lip]); // Acrescenta o primeiro item da lista na liAux
    for (i = 1; i < lista.length; i++) { //
        if (lista[i].cod_cli == lista[i - 1].cod_cli) { //Se o próximo item da lista for = ao anterior;
            let tele = {}; //Novo objeto telefone
            tele.tipo = lista[i].telefones[0].tipo;
            tele.numero = lista[i].telefones[0].numero;
            aux[lip].telefones.push(tele); //Acrescento somente o novo objeto telefone;
        } else { // Senão acrescenta o novo item na lista e incrementa o indice.
            aux.push(lista[i]);
            lip++;
        }
    }
    return aux; //Retornamos a nova lista sem os duplicados e com o objetos telefones.
}

module.exports = {
    clientes
};