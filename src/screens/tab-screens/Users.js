import React, { useState, useEffect } from 'react';
//react native imports
import { Text, FlatList, View } from 'react-native'
//style imports
import containers from '../../styles/containers'
export default function Users(){

    const [users, setUsers] = useState([])

    useEffect( () => {
        
    }, [])

    return (
        <View> 
            <FlatList style={containers.usersContainer}
            data={users}
            keyExtractor={(user) => user.id}
            renderItem={User}/>
        </View>
    )
}

function User(item) {
    const { user, nome, email } = item.item

    return (
        <View style={containers.userContainer}> 
            {/* <Text> { user } </Text> */}
            <Text> { nome } </Text>
            {/* <Text> { email } </Text> */}
        </View>
    )
}