function inicio() {
    var i, j, copia, troca = 0, tam = 10
    var vet = [55, 35, 10, 68, 99, 31, 60, 19, 10, 05]

    troca = 0
    for (i = 0; i < tam - 1; i++) {
        if(vet[i] < vet[i+1]){
        copia = vet[i]
        vet[i] = vet[i + 1]
        vet[i + 1] = copia
        troca = 1
        }
    }

    while (troca == 1) {
        for (i = 0; i < tam; i++) {
            console.log(vet[i], ",");
        }

    }


}

console.log(inicio());