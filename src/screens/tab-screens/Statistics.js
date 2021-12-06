import React from 'react';
//react native
import { View, Text, TouchableOpacity } from 'react-native'
//styles
import containers from '../../styles/containers'
import titles from '../../styles/titles'
//components

export default function Statistics({navigation}){
    const logout = (navigation) => {
        navigation.navigate('Login')
        console.log('clicou em logout')
    }

    return (
        <View style={containers.background}>
            <TouchableOpacity onPress={() => logout(navigation)}> 
                <Text> logout </Text> 
            </TouchableOpacity>

            <View>
                <Text style={titles.title}> STATISTICS </Text>
            </View>

        </View>
        
    )
}