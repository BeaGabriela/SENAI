import { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from '../styles/style'

export default function Vendas() {
    const [vendas, setVendas] = useState([])

    useEffect(() => {
        listarVendas()
        setInterval(() => {
            console.log('Atualizando lista')
            listarVendas()
        }, 900000)
    }, [])


    const listarVendas = () => {
        fetch('http://localhost:3000/vendas')
            .then(res => { return res.json() })
            .then(data => {
                console.log(data)
                setVendas(data)
            })
    }

    return (
        <ScrollView style={styles.viewGeralVendas}>
            <View style={styles.header}>
                <Text style={styles.tituloVendas}>Vendas</Text>
            </View>
            <View>
                {
                    vendas.map((v, i) => {
                        var data = v.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                        return (
                            <View style={styles.navVendas} key={i}>
                                <Text style={styles.titulo}>Venda</Text>
                                <View>
                                    <Text>Venda: {v.id}</Text>
                                    <Text style={styles.text}>Data: {data}</Text>
                                    <Text style={styles.text}>Vendedor: {v.id_vendedores}</Text>
                                    {
                                        v.detalhes.map((d, index) => {
                                            return (
                                                <View key={index}>
                                                    <Text style={styles.titulo}>Detalhes:</Text>
                                                    <Text style={styles.text}>Detalhes: {d.id}</Text>
                                                    <Text style={styles.text}>Produto: {d.id_produto}</Text>
                                                    <Text style={styles.text}>Quantidade: {d.quantidade}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}
