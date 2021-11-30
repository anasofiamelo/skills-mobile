import { StyleSheet } from 'react-native'

const styledButton = StyleSheet.create({
    button: {
        backgroundColor: '#ebf5fc',
        color: '#32a3b1',
        borderRadius: 25,
        width: 330,
        height: 55,
        textAlign: 'center',
        fontSize: 25,
        elevation: 5,
    },

    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#ebf5fc',
        height: '100%',
    },
    title: {
        textAlign: 'center'
    },
    inputContainer: {
        textAlign: 'center',
        width: 400,
    },
    input: {
        backgroundColor: '#ebf5fc',
        width: 330,
        height: 55,
        borderRadius: 25,
        marginTop: 10,
        elevation: 5,
    },
    subtext: {
        fontSize: 15, 
        textAlign: 'center',
        color: '#32a3b1',
    },
    red: {
        backgroundColor: 'red',
    }
})




export default styledButton;