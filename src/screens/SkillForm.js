import React from 'react';
//react native
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
//styles
import containers from '../styles/containers';
import titles from '../styles/titles';
import buttons from '../styles/buttons';

export default function SkillForm(){
    return (
        <View style={containers.background}>

            <Text style={titles.title}> SKILL FORM </Text>
            <Text style={titles.subtext}> add skills to your profile </Text>

            <Text style={titles.subtitle}> SELECT A SKILL </Text>
            <View>
                <Text style={titles.subtitle}> YOUR SKILL LEVEL </Text> 
                <TextInput
                    style={buttons.input}
                    placeholder="ex: Beginner"> 
                </TextInput>
            </View>
            

        <Text style={titles.subtext}> sign more skills </Text>

        <TouchableOpacity style={buttons.button}>
            <Text style={buttons.buttonText}> SEND </Text>
        </TouchableOpacity>
        </View>
    )
}