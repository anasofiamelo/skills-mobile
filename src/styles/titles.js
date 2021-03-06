import { StyleSheet } from 'react-native'
//colors
import colors from '../../assets/colors/colors'

const titles = StyleSheet.create({
    title: {
        fontFamily: 'MontserratMedium',
        fontSize: 35,
        color: colors.text,
    },
    subtitle: {
        fontFamily: 'MontserratRegular',
        fontSize: 20,
        color: colors.primary,
        marginBottom: 10,
        marginLeft: 5
    },
    subtitleFeed: {
        fontFamily: 'PoppinsRegular',
        fontSize: 18,
        color: colors.text,
    },
    text: {
        fontFamily: 'PoppinsRegular',
        fontSize: 18,
        color: colors.primaryLight
    },
    textBlack: {
        fontFamily: 'PoppinsRegular',
        fontSize: 18,
        color: colors.textLight
    },
    subtext: {
        fontFamily: 'MontserratRegular',
        fontSize: 15, 
        color: colors.textLight,
        marginLeft: 7
    },
    subtextCenter: {
        fontFamily: 'MontserratRegular',
        fontSize: 15, 
        color: colors.textLight,
        textAlign: 'center',
    },
    skillText: {
        fontSize: 18,
    },
    skillLevelText: {
        fontSize: 15,
        textTransform: 'uppercase',
        color: colors.primary
    },
    footerText: {
        fontFamily: 'MontserratRegular',
        fontSize: 13, 
        color: colors.textLight,
        textAlign: 'center',
    }
})


export default titles;