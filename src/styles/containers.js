import { StyleSheet } from 'react-native'

import colors from '../../assets/colors/colors'

const containers = StyleSheet.create({
    //page containers
    background: {
        backgroundColor: colors.background,
        paddingLeft: '6%',
        height: '100%',
        paddingTop: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.background,
        height: '100%',
    },
    sectionContainer: {
        marginTop: 10,
        width: '92%'
    },
    //login container
    loginTitleContainer: {
        alignItems: 'center',
    },
    subtitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20
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
    //skills container
    skillContainer: {
        marginLeft: 5,
        padding: 5,
        marginBottom: 10
    },
    skillsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flatlistContainer: {
        // width: '90%'
    },
    subtextContainer: {
        margin: 10
    },
    //footer container
    footerContainer: {
        backgroundColor: colors.background,
        paddingBottom: 10
    }
})

export default containers;