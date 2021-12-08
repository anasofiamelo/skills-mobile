import { StyleSheet } from 'react-native'

import colors from '../../assets/colors/colors'

const containers = StyleSheet.create({
    //page containers
    background: {
        backgroundColor: colors.background,
        height: '100%',
        paddingLeft: 30
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.background,
        height: '100%',
    },
    //login container
    loginTitleContainer: {
        alignItems: 'center',
    },
    subtitleContainer: {
        flexDirection: 'row'
    },
    //user container
    userContainer: {
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: 25,
        marginBottom: 10,
    },
    //card container
    cardContainer: {

    },
    feedContainer: {
        flexDirection: 'row'
    },
    //acitivies container
    feedDivisionContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    activities: {
        width: 20, 
        height: 189, 
        borderRadius: 25,
        backgroundColor: colors.primary,
    },
    //footer container
    footerContainer: {
        backgroundColor: colors.background,
        paddingBottom: 10
    }
})

export default containers;