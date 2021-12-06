import React from "react";
 //react native
import { View, Text } from "react-native";
//styles
import titles from '../styles/titles'
import containers from '../styles/containers'
import buttons from '../styles/buttons'

export default function YourSkills(){
    return (
        <View style={containers.background}>
            <Text style={titles.title}> YOUR SKILLS </Text>
            <Text style={titles.subtext}> skills on your profile </Text>
            <Text style={titles.subtitle}> SKILLS (2) </Text>

        </View>
    )
}