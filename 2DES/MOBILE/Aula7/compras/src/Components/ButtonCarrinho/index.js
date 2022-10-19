import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default function ButtonCarrinho(props) {
    const {value, onPress} = props

    return(
        <TouchableOpacity style={styles.button} onPress={()=>{onPress()}}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
    textAlign: 'center',
    backgroundColor: '#C0C0C0',
    borderRadius: '5px',
    height:'40px',
    width: '80vw',
    margin: '35px',
    marginTop: '22vh'
    },

    text: {
        color: 'black',
        paddingTop: '10px',
    }


})