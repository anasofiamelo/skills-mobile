import { StyleSheet } from 'react-native'

import colors from '../../assets/colors/colors'

const buttons = StyleSheet.create({
    button: {
        width: 330,
        height: 55,
        borderRadius: 25,
        backgroundColor: colors.background,
        elevation: 5,
    },
    buttonText: {
        color: colors.primary,
        fontFamily: 'MontserratMedium',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10
    },
    input: {
        backgroundColor: '#ebf5fc',
        width: 330,
        height: 55,
        borderRadius: 25,
        marginTop: 10,
        elevation: 5,
        paddingLeft: 20
    },
})


export default buttons;