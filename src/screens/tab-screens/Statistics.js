import React from 'react';
//react native
import { View, Text, TouchableOpacity } from 'react-native'
//styles
import containers from '../../styles/containers'
import titles from '../../styles/titles'
//contexts
import { useAuth } from '../../contexts/auth'

export default function Statistics({navigation}){
    const context = useAuth()
    const logout = () => {
        context.Logout()
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