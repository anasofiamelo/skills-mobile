import React from 'react'
import { View, Text } from 'react-native'
//styles
import containers from '../styles/containers';
import titles from '../styles/titles';

export default function Footer(){
    return (
        <View style={containers.footerContainer}> 
            <Text style={titles.footerText}> copyright © - 2021 </Text>
        </View>
    )
}