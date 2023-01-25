
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Home({ navigation }) {

    return (
        <View style={styles.viewPrincioal}>
            <TouchableOpacity style={styles.touch} onPress={() => { navigation.navigate("Historico") }}>
                <Text style={styles.textVacinas}>Histórico de Vacinas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={() => { navigation.navigate("Registro")}}>
                <Text style={styles.textVacinas}>Registrar Vacina</Text>
            </TouchableOpacity>
        </View>
    )

}