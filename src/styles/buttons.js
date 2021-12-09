import { StyleSheet } from 'react-native'

import colors from '../../assets/colors/colors'

const buttons = StyleSheet.create({
    button: {
        width: 330,
        height: 55,
        borderRadius: 25,
        backgroundColor: colors.background,
        elevation: 3,
    },
    buttonText: {
        color: colors.primary,
        fontFamily: 'MontserratMedium',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10
    },
    miniButton: {
        width: 126,
        height: 30,
        borderRadius: 25, 
        backgroundColor: colors.background,
        elevation: 3,
        marginTop: 20
    },
    miniButtonText: {
        color: colors.primary,
        fontFamily: 'MontserratMedium',
        fontSize: 18,
        textAlign: 'center'
    },
    input: {
        backgroundColor: colors.background,
        width: 330,
        height: 55,
        borderRadius: 25,
        marginTop: 10,
        marginLeft: 5,
        elevation: 3,
        paddingLeft: 20,
    },
})


export default buttons;