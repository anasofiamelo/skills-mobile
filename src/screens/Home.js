import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
//contexts
import { useAuth } from '../contexts/auth'
// import { useUserSkills } from '../../contexts/userskills'
//styles
import titles from '../styles/titles'
import containers from '../styles/containers'
import buttons from '../styles/buttons'
import cards from '../styles/cards'


export default function Home({navigation}) {
    const { user, userSkills } = useAuth();
    const context = useAuth()
    // useEffect(() => {
    //     console.log(userSkills)
    // }, [])

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
    const logout = () => {
        context.Logout()
        console.log('clicou em logout')
    }

    return (
        <ScrollView style={containers.background}>
            <TouchableOpacity onPress={() => logout(navigation)}> 
                <Text style={titles.subtext}> logout </Text> 
            </TouchableOpacity>

            <View>
                <Text style={titles.title}> Hello, { user.nome } </Text>

                <View style={containers.sectionContainer}>
                    <Text style={titles.subtitle}> SKILLS ({userSkills.length}) </Text>

                <FlatList style={containers.flatlistContainer}
                    horizontal={true}
                    keyExtractor={(item) => item.id_action}
                    data={userSkills}
                    renderItem={({item}) => (
                        <View style={containers.skillContainer}>
                            <Text style={titles.skillText}>{item.habilidade}</Text>
                            <Text style={titles.skillLevelText}>{item.nivel}</Text>
                        </View>
                    )}
                />
                    <TouchableOpacity 
                        style={buttons.miniButton}
                        onPress={() => skillForm()}> 
                        <Text style={buttons.miniButtonText}> add skill </Text>
                    </TouchableOpacity>
                    

                </View>
                
                <View style={containers.subtextContainer}>
                    <Text style={titles.subtextCenter}> sign more skills and give your</Text>
                    <Text style={titles.subtextCenter}>  profile more contrast! </Text>
                </View>
                

                <View style={containers.sectionContainer}>
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
                            <View style={cards.activities}>
                                <View style={containers.activities}></View>
                            </View>
                                
                        </View>


                    </View>
                </View>
            </View>
            
        </ScrollView>
        
    )
} 
