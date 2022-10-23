import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';

export default function Home(route) {
    var matricula = route.params.matricula;
    var nomeFunc= route.params.nome;


    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [lista, setLista] = useState([
        {
            "nome": "Fulano",
            "cargo": "Programador"
        },
        {
            "nome": "Ciclano",
            "cargo": "Analista"
        }
    ]);

    const cadastrar = () => {
        // console.log(nome, cargo);
        let nFunc = {
            "nome": nome,
            "cargo": cargo
        }
        setLista([...lista, nFunc]); /* As ... desconstroem o vetor */
    }

    return (
        <View style={style.container}>
            <Text>{matricula}</Text>
            <Text>{nomeFunc}</Text>
            <TextInput placeholder="Nome do Funcionário" onChangeText={(val) => { setNome(val) }} /> {/* As chaves indicam que será feita uma chamada */}
            <TextInput placeholder="Cargo do Funcionário" onChangeText={(val) => { setCargo(val) }} />
            <Button title="Cadatrar Funcionario" onPress={() => { cadastrar() }} />
            <ScrollView>
                {
                    lista.map((funcionario, indice) => {
                        return (
                            <View key={indice}>
                                <Text>{funcionario.nome}</Text>
                                <Text>{funcionario.cargo}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dee2ff',
        alignItems: 'center'
    },
    border: {
        border: '3px solid',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        width: '60vw',
        height: '80vh',
        alignItems: 'center'
    },
    inp: {
        border: '3px solid',
        margin: '5px',
        width: '55vw',
        height: '4vh'
    },
    cadastrar: {
        backgroundColor: 'rgb(51, 153, 255)',
        width: '55vw',
        height: '5vh',
        alignItems: 'center',
        padding: '1vh'
    },
});