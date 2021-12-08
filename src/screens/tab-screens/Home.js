import React, { useEffect, useState } from 'react';
//axios
import axios from 'axios'
//react native
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
//contexts
import { useAuth } from '../../contexts/auth'
//styles
import titles from '../../styles/titles'
import containers from '../../styles/containers'
import buttons from '../../styles/buttons'
import cards from '../../styles/cards'


export default function Home({navigation}) {
    const { user } = useAuth();

    const [userSkills, setUserSkills] = useState([])
    
    useEffect(() => {
        getUserSkills()
    }, [])

    const getUserSkills = () => {
        axios.get(`http://192.168.0.101:3000/users/${user.id}/habilidades`)
        .then(response => {
            setUserSkills(response.data)
        })
        .catch(error => console.log(error))
    }

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
                <Text style={titles.title}> Hello, { user.nome } </Text>

                <View>
                    <Text style={titles.subtitle}> SKILLS (2) </Text>

                    <FlatList 
                        keyExtractor={(item) => item.id_action}
                        data={userSkills}
                        renderItem={({item}) => (
                            <Text>{item.habilidade}</Text>
                        )}
                    />

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

                    <View style={containers.feedContainer}> 

                        <View style={containers.feedDivisionContainer}>

                            <View style={cards.cardYourSkills}>
                                <Text style={titles.subtitleFeed}>YOUR SKILLS</Text>
                                    <Text style={titles.subtext}> Organize your skills </Text>
                                <TouchableOpacity 
                                    style={buttons.miniButton}
                                    onPress={() => yourSkills()}>
                                    <Text style={buttons.miniButtonText}> VIEW </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={cards.cardLookingForDevs}>
                                <Text style={titles.subtitleFeed}>LOOKING FOR DEVS?</Text>
                                <Text style={titles.subtext}>Find devs with the skills</Text>
                                <Text style={titles.subtext}>you are looking for!</Text>
                                <TouchableOpacity 
                                    style={buttons.miniButton}
                                    onPress={() => search()}>
                                    <Text style={buttons.miniButtonText}> SEARCH </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        

                        <View style={cards.cardActivities}>
                            <Text style={titles.subtitleFeed}>ACTIVITIES</Text>
                                <View style={containers.activities}></View>
                        </View>


                    </View>
                </View>
            </View>
            
        </View>
        
    )
} 
