import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
//screens
import Login from './src/screens/Login'
import Principal from './src/screens/Principal'
import Register from './src/screens/Register'

const Stack = createStackNavigator()
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Principal" component={Principal}/>
      <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  ) 
}
