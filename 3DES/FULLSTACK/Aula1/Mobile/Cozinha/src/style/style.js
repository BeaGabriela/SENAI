import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    view_Principal:{
        backgroundColor: '#66ccff' ,
    },

    view_coznha: {
        marginTop: '10px',
        backgroundColor: '#66ffff',
        border: 'none',
        borderRadius: '20px',
        boxShadow: '2px  2px 2px #006db2 ',
        padding: '10px',
        width: '100%'
    },

    view_geral: {
        display: 'flex',
        flexDirection: 'row'
    },

    button:{
        textAlign: 'right',
        marginBottom: '10px',
        marginLeft: '60vw',
        width: '35%',
        height: '10%',
        border: 'none',
        borderRadius: '20px',
        boxShadow: '2px  2px 2px #006db2 ',
        textAlign: 'center',
        cursor: 'pointer'
    },

    text:{
        paddingTop: '10px',
    },

    view_lateral:{
        textAlign: 'right'
    },

    titulo:{
        textAlign: 'center',
        fontSize: '20pt',
        color: '#fff'
    }

})