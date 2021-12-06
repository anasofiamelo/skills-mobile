import React from 'react';
import { Text, View, TextInput } from 'react-native'
//styles
import containers from '../styles/containers';
import titles from '../styles/titles';
import buttons from '../styles/buttons';

export default function SearchDev(){
    return (
        <View style={containers.background}>

            <Text style={titles.title}> FIND DEVS </Text>
            <Text style={titles.subtext}> Search for a skill or a user </Text>
            
            <TextInput 
                placeholder="search"
                style={buttons.input}> 
            </TextInput>

            <Text style={titles.subtitle}> RESULTS </Text>
        </View>
    )
}