import { StyleSheet } from 'react-native'
//colors
import colors from '../../assets/colors/colors'

const titles = StyleSheet.create({
    title: {
        fontFamily: 'MontserratMedium',
        fontSize: 40,
        color: colors.text
    },
    subtitle: {
        fontFamily: 'PoppinsRegular',
        fontSize: 24,
        color: colors.primary,
        marginLeft: 5
    },
    text: {
        fontFamily: 'PoppinsRegular',
        fontSize: 18,
        color: colors.primaryLight
    },
    textBlack: {
        fontSize: 18,
        color: colors.textLight
    }
})


export default titles;