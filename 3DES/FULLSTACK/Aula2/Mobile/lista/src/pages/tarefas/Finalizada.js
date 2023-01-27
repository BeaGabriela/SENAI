import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../style/style'

export default function Finalizada() {
    const [tarefasA, setTarefasA] = useState([])

    useEffect(() => {
        setInterval(() => {
            console.log('Atualizando lista')
            listarTarefas()
        }, 1500)
    }, [])


    const listarTarefas = () => {
        fetch('http://localhost:3000/tarefasFinal')
            .then(res => { return res.json() })
            .then(data => {
                setTarefasA(data)
            })
    }

    return (
        <View>
            {
                tarefasA.map((t, index) => {
                    return (
                        <View key={index} style={styles.viewTarefa}>
                            <Text style={styles.Text}>Descrição da tarefa: {t.descricao}</Text>
                            <Text style={styles.Text}>Horário da tarefa: {t.hora_tarefa}</Text>
                            <Text style={styles.Text}>Status {t.status}</Text>                               
                        </View>
                    )
                })
            }

        </View>
    )

}