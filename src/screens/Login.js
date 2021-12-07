import React, { useState } from 'react';
//react-native imports
import { 
    StatusBar, 
    SafeAreaView, 
    TextInput,
    TouchableOpacity,
    View,
    Text,
    Button
} from 'react-native'
// contexts
import { useAuth } from '../contexts/auth'
// style imports
import buttons from '../styles/buttons'
import containers from '../styles/containers'
import titles from '../styles/titles'

export default function Login({navigation}) {
    
    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)
    const context = useAuth()

    function handleLogin(){
        context.Login(user, password)
    }
    //navegar p/ tela de registro
    const register = () => {
        console.log('clicou em register')
        navigation.navigate('Register')
    }
    
    return (
        <View style={containers.container}>
        <SafeAreaView style={containers.container}>
        <StatusBar/>

        <View style={containers.loginTitleContainer}> 
            <Text style={titles.title}> SIGN IN</Text>
            <Text style={titles.subtext}>create your profile and share</Text>
            <Text style={titles.subtext}> your programming skills </Text>
        </View>

        <View style={containers.inputContainer}> 
            <TextInput
                placeholder="example"
                onChangeText={value => setUser( value )}
                style={buttons.input}/>

            <TextInput
                placeholder="*****"
                onChangeText={value => setPassword( value )}
                secureTextEntry={true}
                style={buttons.input}/>
        </View>
        
        <View style={containers.subtitleContainer}>
                <Text style={titles.textBlack}> Not a user? </Text>
            <TouchableOpacity onPress={() => register()}> 
                <Text style={titles.text}> Register </Text> 
            </TouchableOpacity>
        </View>

        <View style={buttons.buttonContainer}>
            <TouchableOpacity
                style={buttons.button}
                onPress={() => handleLogin()}>
                    <Text style={buttons.buttonText}> LOGIN </Text>
            </TouchableOpacity>
        </View>

        <Text style={titles.text}> Forgot your password? </Text>

    </SafeAreaView> 
    </View>
)
}

