import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
//react native
import { View, TouchableOpacity, Text, FlatList } from 'react-native'
//styles
import containers from '../styles/containers';
import titles from '../styles/titles';
import buttons from '../styles/buttons';
import cards from '../styles/cards';
import colors from '../../assets/colors/colors'

export default function CardUser({id, nome, email}){

    const navigation = useNavigation()
    const [userSkills, setUserSkills] = useState([])

    return (
        <View> 
            <TouchableOpacity onPress={()=> {
                console.log(id)
                navigation.navigate('UserProfile', {id: id})
                }}>
                <View style={cards.cardUser}> 
                    <Text style={titles.subtitle}>{nome}</Text>
                    <Text style={titles.subtext}>{email}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}