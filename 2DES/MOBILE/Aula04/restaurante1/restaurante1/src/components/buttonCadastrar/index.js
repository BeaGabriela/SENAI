import { TouchableOpacity, Text } from "react-native";

import styles from '/styles';

export default function ButtonCadastrar(){
    const {value, onPress} = props;

    return (
        <TouchableOpacity style={styles.button} onPress={() => {onPress()}}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    )
}