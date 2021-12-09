import React from "react";
 //react native
import { View, Text, FlatList, TouchableOpacity } from "react-native";
//colors
import colors from '../../assets/colors/colors'
//styles
import { MaterialCommunityIcons } from '@expo/vector-icons';
import titles from '../styles/titles'
import containers from '../styles/containers'
import buttons from '../styles/buttons'
//contexts
import { useUserSkills } from '../contexts/userskills'

export default function YourSkills(){
    const { userSkills } = useUserSkills();
    return (
        <View style={containers.background}>
            <Text style={titles.title}> YOUR SKILLS </Text>
            <Text style={titles.subtext}> skills on your profile </Text>
            
            <View style={containers.sectionContainer}>
                <Text style={titles.subtitle}> SKILLS (2) </Text>
                <FlatList 
                    keyExtractor={(item) => item.id_action}
                    data={userSkills}
                    renderItem={({item}) => (
                        <View style={containers.skillsContainer}>
                            <View style={containers.skillContainer}>
                                <Text style={titles.skillText}>{item.habilidade}</Text>
                                <Text style={titles.skillLevelText}>{item.nivel}</Text>
                            </View>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="delete" size={25} color={colors.text} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
            
        </View>
    )
}