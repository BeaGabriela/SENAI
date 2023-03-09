var ctxManutencao = document.querySelector("#grafico-manutencao")

function relatorioManutencao() {
    ctxManutencao.innerHTML = ''
    fetch(`http://localhost:3000/manutencao/`)
        .then(response => response.json())
        .then(response => {
            let utilizacao = {
                mes: [],
                veiculo: [],
                // data_inicio: [],
                valor: []
            }
            response.forEach(info => {
                let existente = false
                for (let i = 0; i < utilizacao.mes.length; i++) {
                    if (utilizacao.mes[i] == (info.data_inicio.slice(0, 7))) {
                        // utilizacao.mes[i] += info.data_inicio.slice(0,7)
                        utilizacao.veiculo[i] += info.veiculo
                        utilizacao.valor[i] += info.valor
                        // utilizacao.data_inicio[i] += info.data_inicio
                        existente = true
                        console.log(utilizacao.mes[i])
                    }
                }
                if (!existente) {
                    utilizacao.mes.push(info.data_inicio.slice(0, 7))
                    utilizacao.veiculo.push(info.veiculo)
                    utilizacao.valor.push(info.valor)
                    // utilizacao.data_inicio.push(info.data_inicio)
                }

            })

            new Chart(ctxManutencao, {
                type: 'bar',
                data: {
                    labels: utilizacao.mes,
                    datasets: [{
                        type: 'bar',
                        label: "Veiculo",
                        data: utilizacao.veiculo,
                        borderColor: 'rgba(250, 50, 0,100)',
                        borderWidth: 1,
                        backgroundColor: "rgba(250,50,0,0.5)",
                        borderRadius: 5,
                        borderSkiped: false
                    },
                    {
                        type: 'bar',
                        label: 'mes',
                        data: utilizacao.mes,
                        borderColor: 'rgba(100, 100, 200,100)',
                        borderWidth: 2,
                        backgroundColor: "rgba(0,0,0,0)",
                        borderRadius: Number.MAX_VALUE,
                    },
                        // {
                        //     type: 'line',
                        //     label: 'Data',
                        //     data: utilizacao.mes,
                        //     borderColor:'rgba(1, 100, 200,1)',
                        //     borderWidth: 2,
                        //     backgroundColor: "rgba(0,0,0,0)",
                        //     borderRadius: 5,
                        //     borderSkiped: Number.MAX_VALUE,
                        // }
                    ],
                },
                options: {
                    borderJoinStyle: "bevel",
                    indexAxis: 'y',
                    responsive: false,
                    plugins: {
                        title: {
                            display: true,
                            text: "Jaguariuna mes..."
                        },
                    },
                    interaction: {
                        intersect: false
                    },
                    scales: {
                        x: {
                            beginAtZero: true
                        },
                        y: {
                            stacked: true
                        }
                    },
                }

            })

        })
}

function relatorioVeiculos(){
    ctxManutencao.innerHTML = ''
    fetch(`http://localhost:3000/veiculos`)
        .then(response => response.json())
        .then(response => {
            let utilizacao = {
                veiculo: [],
                disponivel: []
            }
            response.forEach(info => {
                // let existente = false
                // for (let i = 0; i < utilizacao.veiculo.length; i++) {
                //     if (utilizacao.veiculo[i] == (info.veiculo)) {
                //         // utilizacao.mes[i] += info.data_inicio.slice(0,7)
                //         utilizacao.veiculo[i] += info.id
                //         utilizacao.disponivel[i] += info.uso
                //         // utilizacao.data_inicio[i] += info.data_inicio
                //         existente = true
                //         console.log(utilizacao.veiculo)
                //     }
                // }
                // if (!existente) {
                    utilizacao.veiculo.push(info.id)
                    utilizacao.disponivel.push(info.uso)
                    // utilizacao.data_inicio.push(info.data_inicio)
                // }
                        console.log(utilizacao.veiculo)

            })

            new Chart(ctxManutencao, {
                type: 'pie',
                data: {
                    labels: utilizacao.veiculo,
                    datasets: [{
                        // type: 'bar',
                        label: "Disponivel",
                        data: utilizacao.disponivel,
                        borderColor: 'rgba(250, 50, 0,100)',
                        borderWidth: 1,
                        innerWidth: 10,
                        backgroundColor: "rgba(250,50,0,0.5)",
                        // borderRadius: 5,
                        borderSkiped: false
                    },
                    // {
                    //     type: 'bar',
                    //     label: 'mes',
                    //     data: utilizacao.mes,
                    //     borderColor: 'rgba(100, 100, 200,100)',
                    //     borderWidth: 2,
                    //     backgroundColor: "rgba(0,0,0,0)",
                    //     borderRadius: Number.MAX_VALUE,
                    // },
                        // {
                        //     type: 'line',
                        //     label: 'Data',
                        //     data: utilizacao.mes,
                        //     borderColor:'rgba(1, 100, 200,1)',
                        //     borderWidth: 2,
                        //     backgroundColor: "rgba(0,0,0,0)",
                        //     borderRadius: 5,
                        //     borderSkiped: Number.MAX_VALUE,
                        // }
                    ],
                },
                options: {
                    // borderJoinStyle: "bevel",
                    // indexAxis: 'x',
                    responsive: true,
                    plugins: {
                        legend: {
                            position: top
                        },
                        title: {
                            display:true,
                            text: 'chartJAS'
                        },
                    },
                    interaction: {
                        intersect: false
                    },
                    // scales: {
                    //     x: {
                    //         beginAtZero: true
                    //     },
                    //     y: {
                    //         stacked: true
                    //     }
                    // },
                }

            })

        })
}



function relatorioOperacao() {
    ctxManutencao.innerHTML = ''
    fetch(`http://localhost:3000/operacoes`)
        .then(response => response.json())
        .then(response => {
            let utilizacao = {
                mes: [],
                veiculo: [],
                data_inicio: [],
                
            }
            response.forEach(info => {
                let existente = false
                for (let i = 0; i < utilizacao.mes.length; i++) {
                    if (utilizacao.mes[i] == (info.data_saida.slice(0, 7))) {
                        // utilizacao.mes[i] += info.data_inicio.slice(0,7)
                        utilizacao.veiculo[i] += info.veiculo
                        utilizacao.data_inicio[i] += info.data_saida.slice(0,7)
                        // utilizacao.data_inicio[i] += info.data_inicio
                        existente = true
                        console.log(utilizacao.mes[i])
                    }
                }
                if (!existente) {
                    utilizacao.mes.push(info.data_saida.slice(0, 7))
                    utilizacao.veiculo.push(info.veiculo)
                    utilizacao.data_inicio.push(info.data_saida)
                    // utilizacao.data_inicio.push(info.data_inicio)
                }

            })

            new Chart(ctxManutencao, {
                type: 'bar',
                data: {
                    labels: utilizacao.mes,
                    datasets: [{
                        type: 'bar',
                        label: "Operacao",
                        data: utilizacao.veiculo,
                        borderColor: 'rgba(250, 50, 0,100)',
                        borderWidth: 1,
                        backgroundColor: "rgba(250,50,0,0.5)",
                        borderRadius: 5,
                        borderSkiped: false
                    },
                    // {
                    //     type: 'bar',
                    //     label: 'mes',
                    //     data: utilizacao.mes,
                    //     borderColor: 'rgba(100, 100, 200,100)',
                    //     borderWidth: 2,
                    //     backgroundColor: "rgba(0,0,0,0)",
                    //     borderRadius: Number.MAX_VALUE,
                    // },
                        // {
                        //     type: 'line',
                        //     label: 'Data',
                        //     data: utilizacao.mes,
                        //     borderColor:'rgba(1, 100, 200,1)',
                        //     borderWidth: 2,
                        //     backgroundColor: "rgba(0,0,0,0)",
                        //     borderRadius: 5,
                        //     borderSkiped: Number.MAX_VALUE,
                        // }
                    ],
                },
                options: {
                    borderJoinStyle: "bevel",
                    indexAxis: 'y',
                    responsive: false,
                    plugins: {
                        title: {
                            display: true,
                            text: "Jaguariuna mes..."
                        },
                    },
                    interaction: {
                        intersect: false
                    },
                    scales: {
                        x: {
                            beginAtZero: true
                        },
                        y: {
                            stacked: true
                        }
                    },
                }

            })

        })
}