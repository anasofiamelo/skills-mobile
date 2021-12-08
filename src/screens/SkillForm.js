import React, { useEffect, useState } from 'react';
//axios
import axios from 'axios'
//react native
import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
//styles
import containers from '../styles/containers';
import titles from '../styles/titles';
import buttons from '../styles/buttons';

export default function SkillForm(){
    const [skills, setSkills] = useState([])

    useEffect(() => {
        getSkills()
    }, [])

    const getSkills = () => {
        axios.get(`http://192.168.0.101:3000/habilidades`)
        .then(response => {
            setSkills(response.data)
        })
        .catch(error => console.log(error))
    }
    return (
        <View style={containers.background}>

            <Text style={titles.title}> SKILL FORM </Text>
            <Text style={titles.subtext}> add skills to your profile </Text>

            <Text style={titles.subtitle}> SELECT A SKILL </Text>
            <FlatList 
                        keyExtractor={(item) => item.id}
                        data={skills}
                        renderItem={({item}) => (
                            <Text>{item.habilidade}</Text>
                        )}
                    />
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