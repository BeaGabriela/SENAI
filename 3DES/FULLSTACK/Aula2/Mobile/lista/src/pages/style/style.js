import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    viewG :{ 
        backgroundColor: '#CDF0EA',
        height: '100vh'
    },

    button:{
        backgroundColor: '#CDF0EA' ,
        border: 'none',
        boxShadow: '2px 3px 2px 2px #ADDDD0',
        width: '40%',
        height: '4vh',
        borderRadius: '20px',
        textAlign: 'center',
        paddingTop: '10px',
    },
    buttonFinalizar:{
        border: 'none',
        backgroundColor: '#CDF0EA',
        boxShadow: '2px 3px 2px 2px #ADDDD0',
        width: '30%',
        height: '4vh',
        borderRadius: '20px',
        textAlign: 'center',
        paddingTop: '10px',
        marginTop: '10px'
    },

    buttonCancelar:{
        border: 'none',
        backgroundColor: '#F7DBF0',
        boxShadow: '1px 1px 1p #ff0000',
        width: '30%',
        height: '4vh',
        borderRadius: '20px',
        textAlign: 'center',
        paddingTop: '10px',
        marginTop: '10px'
    },

    view:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '20px'
    },

    viewTarefa:{
        backgroundColor: '#CDF0EA',
        boxShadow: '2px 3px 2px 2px #ADDDD0',
        border: 'none',
        marginTop: '20px',
        borderRadius: '20px',
        textAlign: 'left',
        paddingLeft: '20px',
        paddingTop: '20px',
        paddingBottom: '10px',
        height: '18vh'
    },

    Text: {
        margin: '3px'
    },

    titulo:{
        textAlign: 'center',
        fontSize: '18pt',
        marginTop: '20px'
    },

    ArrumarBotoes:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },


})