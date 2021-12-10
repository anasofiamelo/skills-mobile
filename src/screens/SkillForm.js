import React, { useEffect, useState } from 'react';
//api
import API from '../services/API';
//react native
import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
//react native paper
import { RadioButton } from 'react-native-paper'
//contexts
import { useAuth } from '../contexts/auth'
//styles
import containers from '../styles/containers';
import titles from '../styles/titles';
import buttons from '../styles/buttons';

export default function SkillForm({navigation}){
    const { user, loadUserSkills } = useAuth()
    const [skills, setSkills] = useState([])
    const [checked, setChecked] = React.useState('');
    const [nivel, setNivel] = React.useState('');

    useEffect(() => {
        getSkills()
    }, [])

    async function getSkills(){
        const response = await API.get(`/habilidades`)
        setSkills(response.data)
    }

    async function createSkill(){
        const response = await API.post(`/user/${user.id}/habilidade`, {
            habilidade_id: checked.id,
            nivel: nivel,
            user_id: user.id
        })
        loadUserSkills(user.id)
        navigation.navigate('Home')
    }

    return (
        <View style={containers.background}>

            <Text style={titles.title}> SKILL FORM </Text>
            <Text style={titles.subtext}> add skills to your profile </Text>
            <View style={containers.sectionContainer}>
                <Text style={titles.subtitle}> SELECT A SKILL </Text>
                <FlatList 
                    keyExtractor={(item) => item.id}
                    data={skills}
                    renderItem={({item}) => (
                        <View style={containers.subtitleContainer}>
                            <RadioButton
                                value={item.habilidade}
                                status={ checked.habilidade === item.habilidade ? 'checked' : 'unchecked'}
                                onPress={() => setChecked(item)}
                            />
                            <Text style={titles.skillText}> {item.habilidade} </Text>
                        </View>
                    )}
                />
            </View>
            
            <View style={containers.sectionContainer}>
                <Text style={titles.subtitle}> YOUR SKILL LEVEL </Text> 
                <TextInput
                    style={buttons.input}
                    placeholder="ex: Beginner"
                    value={nivel}
                    onChangeText={(text) => setNivel(text)}> 
                </TextInput>
            
                <Text style={titles.subtext}> sign more skills </Text>

                <TouchableOpacity 
                    style={buttons.button}
                    onPress={() => createSkill()}>
                    <Text style={buttons.buttonText}> SEND </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}