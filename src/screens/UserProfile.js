import React, { useEffect, useState } from 'react';
//react native
import { View, Text, FlatList } from 'react-native'
//api
import API from '../services/API';
//styles
import buttons from '../styles/buttons'
import containers from '../styles/containers'
import titles from '../styles/titles'

export default function UserProfile(props){
    const { id } = props.route.params
    const [userInfo, setUserInfo] = useState({})
    const [userSkills, setUserSkills ] = useState([])

    useEffect(()=> {
        getUserInfo()
        getUserSkills()
    }, [])

    async function getUserInfo(){
        const response = await API.get(`/users/${id}`)
        setUserInfo(response.data)
    }

    async function getUserSkills(){
        const response = await API.get(`/users/${id}/habilidades`)
        setUserSkills(response.data)
    }
    
    return (
        <View style={containers.background}>
            <View style={containers.headerContainer}>
                <Text style={titles.title}> {userInfo.nome} </Text>
                <Text style={titles.textBlack}> {userInfo.user} </Text>

                <View style={containers.sectionContainer}>
                    <Text style={titles.subtitle}> PROFILE INFO </Text>
                    <Text style={titles.subtext}> description - {userInfo.profileDesc} </Text>
                    <Text style={titles.subtext}> email - {userInfo.email} </Text>
                </View>
                
                <View style={containers.sectionContainer}>

                    <Text style={titles.subtitle}> SKILLS ({userSkills.length}) </Text>
                    <FlatList
                        keyExtractor={(item) => item.id_action}
                        data={userSkills}
                        renderItem={({item}) => (
                            <View style={containers.cardContainer}>
                                <Text style={titles.skillText}> {item.habilidade} </Text>
                                <Text style={titles.skillLevelText}> {item.nivel} </Text>
                            </View>
                        )}    
                    />
                </View>
            </View>
        </View>
    )
}