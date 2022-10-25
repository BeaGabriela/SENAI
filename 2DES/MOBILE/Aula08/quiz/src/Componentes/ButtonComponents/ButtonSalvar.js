import {TouchableOpacity, Text} from 'react-native';

import styles from './style';

export default function ButtonNext(props) {
    const { value, onPress } = props;

    return(
        <TouchableOpacity style={styles.buttons} onPress={()=>{onPress()}}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    )
}
