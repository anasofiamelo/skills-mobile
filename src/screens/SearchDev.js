import React, { useEffect, useState } from 'react';
//axios
import axios from 'axios'
//react native
import { Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native'
//styles
import { MaterialCommunityIcons } from '@expo/vector-icons';
import containers from '../styles/containers';
import titles from '../styles/titles';
import buttons from '../styles/buttons';
import cards from '../styles/cards';
import colors from '../../assets/colors/colors'
//contexts
import { useUsers } from '../contexts/users'

export default function SearchDev({navigation}){
    const { users } = useUsers();
    
    return (
        <View style={containers.background}>

            <Text style={titles.title}> FIND DEVS </Text>
            <Text style={titles.subtext}> search for a skill or a user </Text>
            
            <TextInput 
                placeholder="search"
                style={buttons.input}> 
            </TextInput>

            <View style={containers.sectionContainer}>
                <Text style={titles.subtitle}> RESULTS </Text>
                <FlatList 
                    keyExtractor={(item) => item.id}
                    data={users}
                    renderItem={({item}) => (
                            <TouchableOpacity onPress={()=> {
                                const userId = item.id
                                console.log(item.id)
                                navigation.navigate('UserProfile', {id: item.id})
                                }}>
                                <View style={cards.cardUser}> 
                                    <Text style={titles.subtitle}>{item.nome}</Text>
                                    <Text style={titles.subtext}>{item.email}</Text>
                                </View>
                            </TouchableOpacity>
                    )}
                />
            </View>
            
        </View>
    )
}