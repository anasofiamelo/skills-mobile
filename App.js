import React from 'react';

//reactnative
import { View } from 'react-native';
//reactnative navigation
import { NavigationContainer } from '@react-navigation/native'
//routes
import Routes from './src/routes/index'
//contexts
import { AuthProvider } from './src/contexts/auth'
//fonts
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat'
import { Poppins_100Thin, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'

//footer
import Footer from './src/components/Footer'


function MyStack() {
  return (
    <AuthProvider>
        <Routes />
        <Footer />
    </AuthProvider>
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
