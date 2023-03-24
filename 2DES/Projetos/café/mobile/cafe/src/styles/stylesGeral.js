import { StyleSheet } from 'react-native';
import { shadow } from 'react-native-paper';

export default StyleSheet.create({
    //Login
    view: {
        backgroundColor: '#fff',
        height: '100%',
    },
    headers: {
        height: '16vh',
        backgroundColor: "#522f16",
        borderBottomRightRadius: "50%",
        borderBottomLeftRadius: "50%"
    },


    view_main: {
        boxShadow: '2px 2px 2px 2px #8b4513',
        height: '40vh',
        width: '92vw',
        borderRadius: '25px',
        textAlign: 'center',
        marginTop: '20vh',
        marginLeft: "4vw",
        paddingTop: '5vh'

    },

    text: {
        color: 'white',
        fontSize: '18px',
        paddingLeft: '10px',
        paddingRight: '10px',
        fontWeight: 'bold',
    },

    textAlinhado: {
        color: '#000',
        fontSize: '18px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingBottom: '6px',
    },

    textSubTitulo: {
        color: '#000',
        fontSize: '18px',
        paddingLeft: '28vw',
        paddingRight: '10px',
        paddingBottom: '1vh',
    },

    textTitulo: {
        color: 'white',
        fontSize: '18px',
        paddingTop: '5vh',
        paddingRight: '3vw',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    button: {
        height: '45px',
        width: '80vw',
        backgroundColor: '#8b4513',
        color: 'white',
        textAlign: 'center',
        borderRadius: '25px',
        marginTop: '20px',
        fontSize: '18pt',
        marginLeft: '5vw',
        paddingTop: '10px'
    },

    buttonSair: {
        height: '45px',
        width: '80vw',
        backgroundColor: '#57d131',
        color: 'white',
        textAlign: 'center',
        borderRadius: '25px',
        marginTop: '20px',
        fontSize: '18pt',
        marginLeft: '10vw',
        paddingTop: '10px'
    },

    input: {
        borderRadius: '25px',
        width: '75vw',
        marginTop: '20px',
        marginLeft: '9vw',

    },

    inputCadastrar: {
        borderRadius: '25px',
        width: '75vw',
        marginTop: '2vh',
        marginLeft: '6vw',
    },

    inputModal: {
        borderRadius: '25px',
        boxShadow: '2px 2px 2px #57d131',
        width: '70vw',
        marginTop: '1vh',
        marginLeft: '2vw',
        padding: '2vh'
    }

})
