import React, { useEffect, useState } from 'react';
//axios
import axios from 'axios'
//react native
import { Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native'
//styles
import containers from '../styles/containers';
import titles from '../styles/titles';
import buttons from '../styles/buttons';
import cards from '../styles/cards';
import colors from '../../assets/colors/colors'
//components
import CardUser from '../components/CardUser'
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
                            <CardUser {...item} /> 
                    )}
                />
            </View>
            
        </View>
    )
}