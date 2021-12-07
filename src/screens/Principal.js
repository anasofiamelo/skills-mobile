import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//tabscreens
import Home from './tab-screens/Home'
import Statistics from './tab-screens/Statistics'

const Tab = createBottomTabNavigator()

function MyTabs(){
    return ( 
        <>
        <Tab.Navigator>

            {/* aba do usuário */}
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-box" color={color} size={size}/>)}}>
            </Tab.Screen>

            <Tab.Screen 
                name="Statistics" 
                component={Statistics}
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