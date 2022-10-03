import {Text, TextInput, View } from "react-native";
import styles from '../../style/index.js';
export default function TelaLoginn(props) {
    const { value1, value2 } = props;

    return (
        <View style={styles.compromissos}>
            <Text style={styles.negrito}>{value1}</Text>
            <Text>{value2}</Text>
        </View>
    )

  
}