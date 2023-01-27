import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../style/style'

export default function Home({ navigation }) {
    const [tarefasA, setTarefasA] = useState([])

    useEffect(() => {
        setInterval(() => {
            console.log('Atualizando lista')
            listarTarefas()
        }, 1500)
    }, [])


    const listarTarefas = () => {
        fetch('http://localhost:3000/tarefasAbertas')
            .then(res => { return res.json() })
            .then(data => {
                setTarefasA(data)
            })
    }


    const finalizar = (id) => {
        listarTarefas()
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: `{"id_tarefa":${id}, "id_status_t": 2 }`
        };

        fetch('http://localhost:3000/alterar', options)
            .then(res => {
                if (res.status === 200) {
                    console.log('Tarefa concluida')
                    window.location.reload()
                }
            })
    }

    const cancelar = (id) => {
        listarTarefas()
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: `{"id_tarefa":${id}, "id_status_t": 3 }`
        };

        fetch('http://localhost:3000/alterar', options)
            .then(res => {
                if (res.status === 200) {
                    console.log('Tarefa cancelada')
                    window.location.reload()
                }
            })
    }


    return (
        <View style={styles.viewG}>
            <View style={styles.view}>
                <TouchableOpacity style={styles.button} onPress={() => {
                     navigation.navigate('Nova')
                }} ><Text>Adicionar Tarefas</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=> {
                    navigation.navigate('tarefas')
                }}><Text>Listar Tarefas</Text></TouchableOpacity>
            </View>

            <Text style={styles.titulo}>Tarefas Abertas</Text>
            {
                tarefasA.map((t, index) => {
                    return (
                        <View key={index} style={styles.viewTarefa}>
                            <Text style={styles.Text}>Descrição da tarefa: {t.descricao}</Text>
                            <Text style={styles.Text}>Horário da tarefa: {t.hora_tarefa}</Text>
                            <Text style={styles.Text}>Status {t.status}</Text>
                            <View style={styles.ArrumarBotoes}>
                                <TouchableOpacity style={styles.buttonCancelar} onPress={() => {
                                    cancelar(t.id_tarefa)
                                }}><Text>Cancelar</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.buttonFinalizar} onPress={() => {
                                    finalizar(t.id_tarefa)
                                }}><Text>Finalizar</Text></TouchableOpacity>
                            </View>
                        </View>
                    )
                })
            }

        </View>
    )

}