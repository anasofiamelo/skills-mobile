import React, { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage"
//react-native imports
import { 
    StatusBar, 
    SafeAreaView, 
    TextInput,
    TouchableOpacity,
    View,
    Text
} from 'react-native'
// service imports
import userService from '../services/UserService'
// style imports
import buttons from '../styles/buttons'
import containers from '../styles/containers'
import titles from '../styles/titles'

export default function Login({navigation}) {

    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)

    async function login() {
        let token = AsyncStorage.getItem("TOKEN")
        let data = 
            {
                user: user,
                senha: password
            }

        userService.login(data)
            .then( (response) => {
                if(!token){
                    return console.log(response.status)
                } else {
                    navigation.navigate('Principal')
                }
            }
                )
            .catch(error => {
                console.log(error.message)
            })
        // navigation.reset({
        //     index: 0,
        //     routes: [{name: 'Principal'}]
        // })
    }

    //navegar p/ tela de registro
    const register = () => {
        console.log('clicou em register')
        navigation.navigate('Register')
    }


    return <View style={containers.container}>
        <SafeAreaView style={containers.container}>
        <StatusBar/>

        <View style={containers.loginTitleContainer}> 
            <Text style={titles.title}> SIGN IN </Text>
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
                onPress={() => login()}>
                    <Text style={buttons.buttonText}> LOGIN </Text>
            </TouchableOpacity>
        </View>

        <Text style={titles.text}> Forgot your password? </Text>

    </SafeAreaView> 
    </View>
}

