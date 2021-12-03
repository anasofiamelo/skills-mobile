import { StyleSheet } from 'react-native'

const containers = StyleSheet.create({
    background: {
        backgroundColor: '#ebf5fc',
        height: '100%'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#ebf5fc',
        height: '100%',
    },
    headerContainer: {
        marginLeft: 10
    },
    subtitleContainer: {
        flexDirection: 'row'
    },
    userContainer: {
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: 25,
        marginBottom: 10,
    }
})

export default containers;