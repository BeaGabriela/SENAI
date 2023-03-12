var manutencao = document.querySelector(".myChartManutencao")
var veiculo = document.querySelector(".myChartVeiculos")

function relatorioManutencao() {
    var ctxManutencao = document.querySelector("#grafico-manutencao")
    manutencao.classList.remove('model')
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
                "#205D67",
                "#639A67",
                "#D8EBB5",
                "#D9BF77",
                "#C1F39C",
                "#C5DFAA",
            ];

            response.forEach(data => {
                if (placaAtual != data.placa) {
                    placaAtual = data.placa;
                    datasets.push(JSON.parse(`{"${placaAtual}" : [0,0,0,0,0,0,0,0,0,0,0,0]}`));
                    datasets[datasets.length - 1][placaAtual][data.mes - 1] = data.total;
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

    var ctxVeiculo = document.querySelector("#grafico-veiculo")
    fetch(`http://localhost:3000/veiculos`)
        .then(response => response.json())
        .then(response => {
            let placa= ''
            let placas = []
            let uso = []
            
            let color = [
                "#205D67",
                "#639A67",
                "#D8EBB5",
                "#D9BF77",
                "#C1F39C",
                "#C5DFAA",
            ];
            

            response.forEach(v => {
                if (placa!= v.placa) {
                    placa = v.placa;
                    placas.push(JSON.parse(`{"${placa}" : [0]}`));
                    placas[placas.length - 1][placa][v.placa] = v.uso;
                } else {
                    placas[placas.length - 1][placa][v.placa] = v.uso;
                }

                  placas = placas.map((data, i) => {
                    console.log(data[Object.keys(data)[0]])
                return {
            //         type: 'pie',
                    label: Object.keys(data)[0],
                    data: data[Object.keys(data)[0]],
            //         borderColor: color[i],
            //         borderWidth: 1,
            //         backgroundColor: color[i],

                }
            })         
               

               
                // console.log(placas)
                 new Chart(ctxVeiculo, {
                type: 'pie',
                data: {
                    labels: [Object.keys(placas)[0]],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                    }]
                },
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Pie Chart'

                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                }
            });

            })
           

        })
}



// function relatorioOperacao() {
//     ctxManutencao.innerHTML = ''
//     fetch(`http://localhost:3000/operacoes`)
//         .then(response => response.json())
//         .then(response => {
//             let utilizacao = {
//                 mes: [],
//                 veiculo: [],
//                 data_inicio: [],

//             }
//             response.forEach(info => {
//                 let existente = false
//                 for (let i = 0; i < utilizacao.mes.length; i++) {
//                     if (utilizacao.mes[i] == (info.data_saida.slice(0, 7))) {
//                         // utilizacao.mes[i] += info.data_inicio.slice(0,7)
//                         utilizacao.veiculo[i] += info.veiculo
//                         utilizacao.data_inicio[i] += info.data_saida.slice(0, 7)
//                         // utilizacao.data_inicio[i] += info.data_inicio
//                         existente = true
//                         console.log(utilizacao.mes[i])
//                     }
//                 }
//                 if (!existente) {
//                     utilizacao.mes.push(info.data_saida.slice(0, 7))
//                     utilizacao.veiculo.push(info.veiculo)
//                     utilizacao.data_inicio.push(info.data_saida)
//                     // utilizacao.data_inicio.push(info.data_inicio)
//                 }

//             })

//             new Chart(ctxManutencao, {
//                 type: 'bar',
//                 data: {
//                     labels: utilizacao.mes,
//                     datasets: [{
//                         type: 'bar',
//                         label: "Operacao",
//                         data: utilizacao.veiculo,
//                         borderColor: 'rgba(250, 50, 0,100)',
//                         borderWidth: 1,
//                         backgroundColor: "rgba(250,50,0,0.5)",
//                         borderRadius: 5,
//                         borderSkiped: false
//                     },
//                         // {
//                         //     type: 'bar',
//                         //     label: 'mes',
//                         //     data: utilizacao.mes,
//                         //     borderColor: 'rgba(100, 100, 200,100)',
//                         //     borderWidth: 2,
//                         //     backgroundColor: "rgba(0,0,0,0)",
//                         //     borderRadius: Number.MAX_VALUE,
//                         // },
//                         // {
//                         //     type: 'line',
//                         //     label: 'Data',
//                         //     data: utilizacao.mes,
//                         //     borderColor:'rgba(1, 100, 200,1)',
//                         //     borderWidth: 2,
//                         //     backgroundColor: "rgba(0,0,0,0)",
//                         //     borderRadius: 5,
//                         //     borderSkiped: Number.MAX_VALUE,
//                         // }
//                     ],
//                 },
//                 options: {
//                     borderJoinStyle: "bevel",
//                     indexAxis: 'y',
//                     responsive: false,
//                     plugins: {
//                         title: {
//                             display: true,
//                             text: "Jaguariuna mes..."
//                         },
//                     },
//                     interaction: {
//                         intersect: false
//                     },
//                     scales: {
//                         x: {
//                             beginAtZero: true
//                         },
//                         y: {
//                             stacked: true
//                         }
//                     },
//                 }

//             })

//         })
// }

function voltarAnterior() {
    window.history.back()
}