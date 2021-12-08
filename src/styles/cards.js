import { StyleSheet } from 'react-native'

import colors from '../../assets/colors/colors'
const cards = StyleSheet.create({
    cardYourSkills: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
        elevation: 5,
        borderRadius: 25,
        width: 191,
        height: 181
    },
    cardLookingForDevs: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
        elevation: 5,
        borderRadius: 25,
        width: 191,
        height: 181
    },
    cardActivities: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
        elevation: 5,
        borderRadius: 25,
        width: 127,
        height: 387
    },
})

export default cards;