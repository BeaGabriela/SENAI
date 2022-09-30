import { TouchableOpacity, Text, TextInput, StyleSheet } from "react-native";

export default function TelaLoginn(props) {
    const { value1, value2, onPress } = props;

    return (
        <View  style={styles.compromissos}>
            <Text>{value1}</Text>
            <Text>{value2}</Text>
        </View>
    )

  
}