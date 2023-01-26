import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';


import styles from '../../style/style'

export default function Home({ navigation }) {
    const [pedidos, setPedidos] = useState([])

    useEffect(() => {
         setInterval(() => {
            console.log('Atualizando lista')
            listarPedidos()}, 1500) //executa em tempo real

        // })
        // setTimeout(() => {
        //     //dexecuta uma vex depois de 1500 milisegundos
        //     listarpedidos()}, 1500)
        // })
      
    }, [])

    const listarPedidos = () => {
        fetch('http://localhost:3000/Cozinha') //Para procurar o localhost em alguns cass abra o CMD e ditite ipconfi e pegue o ipv4. No lugar no localHost.
        .then(res => { return res.json() })
        .then(data => {
            setPedidos(data)
        })
    }

    const enviarEntrega = (id) => {
        listarPedidos()
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: `{"id_pedido":${id}}`
        };

        fetch('http://localhost:3000/horaEntrega', options)
            .then(res => {
                if (res.status === 200) {
                    console.log('Pedido enviado')
                    window.location.reload()
                }
            })
    }

    return (
        <View style={styles.view_Principal}>
            <Text style={styles.titulo}>Em Execução</Text>
            {
                pedidos.map((item, index) => {
                    var data = item.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                    return (
                        <View>
                            <View style={styles.view_geral} >
                                <View  style={styles.view_coznha}>
                                    <Text style={styles.text}>Id: {item.id_pedido}</Text>
                                    <Text style={styles.text}>Cliente: {item.cliente}</Text>
                                    <Text style={styles.text}>Endereço: {item.endereco}</Text>
                                    <Text style={styles.text}>Horario: {item.hora_pedido}</Text>
                                    <Text style={styles.text}>Produto: {item.produto}</Text>
                                    <Text style={styles.text}>Data: {data}</Text>
                                    <Text style={styles.text}>Entrega: {item.hora_entrega}</Text>
                                    <TouchableOpacity style={styles.button} onPress={() => {
                                        enviarEntrega(item.id_pedido)}
                                        }>
                                        <Text>Enviar Entrega</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}