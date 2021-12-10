import React from "react";
 //react native
import { View, Text, FlatList, TouchableOpacity } from "react-native";
//api
import API from '../services/API';
//colors
import colors from '../../assets/colors/colors'
//styles
import { MaterialCommunityIcons } from '@expo/vector-icons';
import titles from '../styles/titles'
import containers from '../styles/containers'
import buttons from '../styles/buttons'
//contexts
import { useAuth } from '../contexts/auth'

export default function YourSkills(){
    const { user, userSkills, loadUserSkills } = useAuth();

    async function deleteUserSkill(idAction){
        const response = await API.delete(`/${idAction}`)
        if(response.status == 200){
            alert('skill deleted', [
                {text: 'ok'}
            ])
        }
        loadUserSkills(user.id)
        console.log(response.status)
    }

    return (
        <View style={containers.background}>
            <Text style={titles.title}> YOUR SKILLS </Text>
            <Text style={titles.subtext}> skills on your profile </Text>
            
            <View style={containers.sectionContainer}>
                <Text style={titles.subtitle}> SKILLS ({userSkills.length}) </Text>
                <FlatList
                    keyExtractor={(item) => item.id_action}
                    data={userSkills}
                    renderItem={({item}) => (
                        <View style={containers.skillsContainer}>
                            <View style={containers.skillContainer}>
                                <Text style={titles.skillText}>{item.habilidade}</Text>
                                <Text style={titles.skillLevelText}>{item.nivel}</Text>
                            </View>
                            <TouchableOpacity onPress={() => deleteUserSkill(item.id_action)}>
                                <MaterialCommunityIcons name="delete" size={25} color={colors.text} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
            
        </View>
    )
}