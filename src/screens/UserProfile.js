import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import API from '../services/API';
export default function UserProfile(props){

    const {id} = props.route.params
    const [userInfo, setUserInfo] = useState({})

    useEffect(()=> {
        getUserInfo()
    }, [])

    async function getUserInfo(){
        const response = await API.get(`/users/${id}`)
        setUserInfo(response.data)
        console.log(response.data)
    }
    
    return (
        <View>
            <Text> {userInfo.nome} </Text>
        </View>
    )
}