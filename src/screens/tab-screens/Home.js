import React, { useState, useEffect } from 'react';

//react native
import { Text, View, TouchableOpacity } from 'react-native'

//async storage
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import config from "../../util/config"

//styles
import titles from '../../styles/titles'
import containers from '../../styles/containers'
import buttons from '../../styles/buttons'


export default function Home({navigation}) {

    const [user, setUser] = useState({})

    async function buscaUser(){
        try {
            const id = await AsyncStorage.getItem("ID")
            console.log(id)
            axios({
                url: config.API_URL + "users/" + id,
                method: "GET",
                timeout: config.TIMEOUT_REQUEST,
                headers: config.HEADER_REQUEST
            }).then((response) => {
                if(!response){
                    return Promise.reject(error)
                } else {
                    return setUser(response.data)
                }
            }).catch((error) => {
                return Promise.reject(error)
            })
        } catch(err) {
            console.log(err)
        }
        
    }

    useEffect(() => {
        buscaUser()
    }, [])


    const search = () => {
        console.log('clicou em search')
        navigation.navigate('SearchDev')
    }
    const skillForm = () => {
        console.log('clicou em skillForm')
        navigation.navigate('SkillForm')
    }
    const yourSkills = () => {
        console.log('clicou em yourSkills')
        navigation.navigate('YourSkills')
    }

    return (
        <View style={containers.background}>
            
            <View>
                <Text style={titles.title}> Hello, {user.nome}</Text>

                <View>
                    <Text style={titles.subtitle}> SKILLS (2) </Text>
                    <TouchableOpacity 
                        style={buttons.miniButton}
                        onPress={() => skillForm()}> 
                        <Text style={buttons.miniButtonText}> add skill </Text>
                    </TouchableOpacity>
                </View>
                
                <View>
                    <Text style={titles.subtext}> sign more skills and give your</Text>
                    <Text style={titles.subtext}>  profile more contrast! </Text>
                </View>
                

                <View>
                    <Text style={titles.subtitle}> FEED </Text>

                    <View style={containers.cardContainer}> 

                        <View style={containers.cardFeedContainer}>
                            <Text style={titles.subtitleFeed}>YOUR SKILLS</Text>
                                <Text style={titles.subtext}> Organize your skills </Text>
                            <TouchableOpacity 
                                style={buttons.miniButton}
                                onPress={() => yourSkills()}>
                                <Text style={buttons.miniButtonText}> VIEW </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={containers.cardFeedContainer}>
                            <Text style={titles.subtitleFeed}>LOOKING FOR DEVS?</Text>
                            <Text style={titles.subtext}>Find devs with the skills</Text>
                            <Text style={titles.subtext}>you are looking for!</Text>
                            <TouchableOpacity 
                                style={buttons.miniButton}
                                onPress={() => search()}>
                                <Text style={buttons.miniButtonText}> SEARCH </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={containers.cardFeedContainer}>
                            <Text style={titles.subtitleFeed}>ACTIVITIES</Text>
                            <View style={containers.activitiesContainer}>
                                <View style={containers.activities}></View>
                            </View>
                        </View>


                    </View>
                </View>
            </View>
            
        </View>
        
    )
} 
