
import React, { useEffect, useState } from 'react';
//react native
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//tabscreens
import Home from './Home'
import SearchDev from './SearchDev';
import SkillForm from './SkillForm';
import YourSkills from './YourSkills';
import UserProfile from './UserProfile';
//styles
import containers from '../styles/containers'
const Tab = createDrawerNavigator()

function MyTabs(){
    return ( 
        <>
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-box" color={color} size={size}/>)}}>
            </Tab.Screen>

            <Tab.Screen 
                name="Your Skills" 
                component={YourSkills}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="poll" color={color} size={size}/>)}}>
            </Tab.Screen>
            <Tab.Screen 
                name="Search Devs" 
                component={SearchDev}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="poll" color={color} size={size}/>)}}>
            </Tab.Screen>
            <Tab.Screen 
                name="Add Skills" 
                component={SkillForm}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="poll" color={color} size={size}/>)}}>
            </Tab.Screen>

        </Tab.Navigator>
        </>
    )
}

export default function Principal(){
    return MyTabs()
}