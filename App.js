import React from 'react';

//reactnative
import { View, Text } from 'react-native';

//reactnative navigation
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

//screens
import Login from './src/screens/Login'
import Principal from './src/screens/Principal'
import Register from './src/screens/Register'
import SearchDev from './src/screens/SearchDev'
import SkillForm from './src/screens/SkillForm'
import YourSkills from './src/screens/YourSkills'
//components

//fonts
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat'
import { Poppins_100Thin, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'

//footer
import Footer from './src/components/Footer'

const Stack = createStackNavigator()

function MyStack() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
        <Stack.Screen options={{headerShown: false}} name="Principal" component={Principal}/>
        <Stack.Screen options={{headerShown: false}} name="Register" component={Register}/>
        <Stack.Screen name="SearchDev" component={SearchDev}/>
        <Stack.Screen name="SkillForm" component={SkillForm}/>
        <Stack.Screen name="YourSkills" component={YourSkills}/>
      </Stack.Navigator>

      <Footer />
      
    </>
  )
}

export default function App() {
  const [loadedFont] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratMedium': Montserrat_500Medium,
    'MontserratSemiBold': Montserrat_600SemiBold,
    'PoppinsThin': Poppins_100Thin,
    'PoppinsRegular': Poppins_400Regular,
    'PoppinsBold': Poppins_700Bold
  });

  if(!loadedFont){
    return <View />
  }

  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  ) 
}
