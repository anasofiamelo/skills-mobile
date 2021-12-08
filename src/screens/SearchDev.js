import React, { useEffect, useState } from 'react';
//axios
import axios from 'axios'
//react native
import { Text, View, TextInput, FlatList } from 'react-native'
//styles
import containers from '../styles/containers';
import titles from '../styles/titles';
import buttons from '../styles/buttons';

export default function SearchDev(){
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        axios.get(`http://192.168.0.101:3000/lista`)
        .then(response => {
            setUsers(response.data)
        })
        .catch(error => console.log(error))
    }
    
    return (
        <View style={containers.background}>

            <Text style={titles.title}> FIND DEVS </Text>
            <Text style={titles.subtext}> Search for a skill or a user </Text>
            
            <TextInput 
                placeholder="search"
                style={buttons.input}> 
            </TextInput>

            <Text style={titles.subtitle}> RESULTS </Text>
            <FlatList 
                keyExtractor={(item) => item.id}
                data={users}
                renderItem={({item}) => (
                    <View> 
                        <Text>{item.nome} - {item.email}</Text>
                    </View>
                )}
            />
        </View>
    )
}