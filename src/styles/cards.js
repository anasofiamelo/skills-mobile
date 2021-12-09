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
        height: 375
    },
    cardUser: {
        width: '100%',
        height: 100,
        backgroundColor: colors.background,
        elevation: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    activities: {
        backgroundColor: colors.background,
        height: 300,
        borderRadius: 25,
        elevation: 5,
        padding: 4,
        justifyContent: 'flex-end',
    }
})

export default cards;