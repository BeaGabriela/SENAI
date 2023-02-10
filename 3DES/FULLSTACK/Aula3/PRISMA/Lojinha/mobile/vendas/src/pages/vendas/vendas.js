import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

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
        <View style={styles.viewGeral}>
            <View style={styles.header}>
                <Text style={styles.tituloVendas}>Vendas</Text>
            </View>
            <View style={styles.nav}>
                {
                    vendas.map((v, i) => {
                        return (
                            <View key={i}>
                                <Text style={styles.titulo}>Vendas</Text>
                                <View>
                                    <Text>Venda: {v.id}</Text>
                                    <Text>Data: {v.data}</Text>
                                    <Text>Vendedor: {v.id_vendedores}</Text>
                                    {
                                        v.detalhes.map((d, index) => {
                                            return (
                                                <View key={index}>
                                                    <Text>Detalhes: {d.id}</Text>
                                                    <Text>Produto: {d.id_produto}</Text>
                                                    <Text>Quantidade: {d.quantidade}</Text>
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
        </View>
    )
}
