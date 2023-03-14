var manutencao = document.querySelector(".myChartManutencao")
var veiculo = document.querySelector(".myChartVeiculos")
// var operacao = document.querySelector(".myChartOperacao")

function relatorioManutencao() {
    var ctxManutencao = document.querySelector("#grafico-manutencao")
    manutencao.classList.remove('model')
    // operacao.classList.add('model')
    veiculo.classList.add('model')
    fetch(`http://localhost:3000/manutencao/total`)
        .then(response => response.json())
        .then(response => {
            let labels = [
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro'
            ];
            let datasets = [];
            let placaAtual = "";
            let color = [
                "#C5DFAA",
                "#D9BF77",
                "#205D67",
                "#639A67",
                "#D8EBB5",
                "#C1F39C",

            ];

            response.forEach(data => {
                if (placaAtual != data.placa) {
                    placaAtual = data.placa;
                    datasets.push(JSON.parse(`{"${placaAtual}" : [0,0,0,0,0,0,0,0,0,0,0,0]}`));
                    datasets[datasets.length - 1][placaAtual][data.mes - 1] = data.total;
                    console.log(datasets)
                } else {
                    datasets[datasets.length - 1][placaAtual][data.mes - 1] = data.total;
                }
            })



            datasets = datasets.map((data, i) => {
                return {
                    type: 'bar',
                    label: Object.keys(data)[0],
                    data: data[Object.keys(data)[0]],
                    borderColor: color[i],
                    borderWidth: 1,
                    backgroundColor: color[i],

                }
            })

            console.log(labels, datasets);

            new Chart(ctxManutencao, {
                type: 'bar',
                data: {
                    labels,
                    datasets,
                },
                options: {
                    borderJoinStyle: "bevel",
                    scales: {
                        y: {
                            beginAtZero: true
                        },
                        x: {
                            stacked: true
                        }
                    }
                }
            })
        })
}


function relatorioVeiculos() {
    veiculo.classList.remove('model')
    manutencao.classList.add('model')
    // operacao.classList.add('model')

    var ctxVeiculo = document.querySelector("#grafico-veiculo")
    fetch(`http://localhost:3000/veiculos`)
        .then(response => response.json())
        .then(response => {
            let veiculos = {
                placas: [],
                dispo: [],
                cor: []
            }

            let corFalsa = "#2E8B57";
            let corVerdadeira = '#ff4040'

            response.forEach(v => {
                veiculos.placas.push(v.placa);
                veiculos.dispo.push(1);
                if (v.uso) {
                    veiculos.cor.push(corVerdadeira)
                } else {
                    veiculos.cor.push(corFalsa)
                }

                console.log(veiculos.placas);
            })
            new Chart(ctxVeiculo, {
                type: 'pie',
                data: {
                    labels: veiculos.placas,
                    datasets: [{
                        label: 'Veiculos',
                        data: veiculos.dispo,
                        backgroundColor: veiculos.cor
                    }]
                },


                title: {
                    display: true,
                    text: 'Chart.js Pie Chart'

                },
                options: {
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                }
            });

        })
}



// function relatorioOperacao() {
//     var ctxOperacao = document.querySelector("#grafico-operacao")
//     operacao.classList.remove('model')
//     manutencao.classList.add('model')
//     veiculo.classList.add('model')
//     var veiculo = {
//         placas: [],
//         qtd : []
//     }
   

//     fetch(`http://localhost:3000/operacoes`)
//         .then(response => response.json())
//         .then(resp => {
//             resp.forEach(o => {
//                veiculo.qtd.push(o.veiculo)
//                veiculo.placas.push(o.placa)
               
//             })

//                 fetch(`http://localhost:3000/operacoes/grafico`)
//                     .then(response => response.json())
//                     .then(response => {
//                         let operacoes = {
//                             nome: [],
//                             mes: []
//                         }

//                         response.forEach(v => {
//                             // operacoes.placas.push(v.placa);
//                             operacoes.nome.push(v.nome);
//                             operacoes.mes.push(v.mes);

//                             console.log(operacoes);
//                         })

                     


//                         // datasets = datasets.map((data, i) => {
//                         //     return {
//                         //         type: 'bar',
//                         //         label: Object.keys(data)[0],
//                         //         data: data[Object.keys(data)[0]],
//                         //         borderColor: color[i],
//                         //         borderWidth: 1,
//                         //         backgroundColor: color[i],

//                         //     }
//                         // })

//                         // console.log(labels, datasets);

//                         new Chart(ctxOperacao, {
//                             type: 'bar',
//                             data: {
//                                 labels: veiculo.placas,
//                                 datasets: [{
//                                     label: 'Quantidade',
//                                     data: veiculo.qtd,
//                                     borderWidth: 1
//                                 }]
//                             },
//                             options: {
//                                 scales: {
//                                     y: {
//                                         beginAtZero: true
//                                     }
//                                 }
//                             }
//                         })

//                         // 

//                         // new Chart(ctxOperacao, {
//                         //     type: 'pie',
//                         //     data: {
//                         //         labels: operacoes.placas,
//                         //         datasets: [{
//                         //             label: 'operacoes',
//                         //             data: operacoes.mes,
//                         //             // backgroundColor: operacoes.cor
//                         //         }]
//                         //     },


//                         //     title: {
//                         //         display: true,
//                         //         text: 'Chart.js Pie Chart'

//                         //     },
//                         //     options: {
//                         //         plugins: {
//                         //             legend: {
//                         //                 position: 'top',
//                         //             },
//                         //             responsive: true,
//                         //             scales: {
//                         //                 y: {
//                         //                     beginAtZero: true
//                         //                 }
//                         //             }
//                         //         }
//                         //     }
//                     })
//             });
// }


function voltarAnterior() {
    window.history.back()
}