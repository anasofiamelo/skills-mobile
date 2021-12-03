import React from 'react';
import { Text, View } from 'react-native'

//styles
import titles from '../../styles/titles'
import containers from '../../styles/containers'

export default function Home() {
    return (
        <View style={containers.background}>
            
            <View style={containers.headerContainer}>
                <Text style={titles.title}> Hello, User </Text>
                <Text style={titles.subtitle}> SKILLS (2) </Text>
            </View>
            
        </View>
        
    )
} 
