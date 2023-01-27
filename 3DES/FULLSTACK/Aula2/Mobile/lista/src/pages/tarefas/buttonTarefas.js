import { View, TouchableOpacity } from 'react-native';

import styles from '../style/style.new'

export default function tarefas({navigation}) {
    return (
        <View>
            <View style={styles.viewPrincipalNova}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('Aberta')
                }}>Abertas</TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('Finalizada')
                }}>Finalizadas</TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('Cancelada')
                }}>Canceladas</TouchableOpacity>
            </View>
            <View>
            </View>
        </View>
    )

}
