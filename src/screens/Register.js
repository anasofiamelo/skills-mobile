import React, { useState, useEffect } from 'react';
// imports do react-native
import { 
    StatusBar, 
    SafeAreaView, 
    TextInput,
    TouchableOpacity,
    View,
    Text,
} from 'react-native'
// style imports
import buttons from '../styles/buttons'
import containers from '../styles/containers'
import titles from '../styles/titles'

export default function Register({navigation}) {

    //states
    const [user, setUser] = useState(null)
    const [name, setName] = useState(null)
    const [senha, setSenha] = useState(null)
    const [email, setEmail] = useState(null)

    //envia os dados do usuário p/ cadastrar no backend
    async function registerUser() {
    }
    
    //volta p/ página de login
    const login = () => {
        navigation.navigate('Login')
    }

    return <View style={containers.container}>
        <SafeAreaView style={containers.container}>
        <StatusBar/>

        <View> 
            <Text style={titles.title}> REGISTER </Text>
        </View>

        <View style={containers.inputContainer}> 

            <TextInput
                style={buttons.input}
                placeholder="user"
                leftIcon={{ type: 'font-awesome', name: 'user'}}
                onChangeText={(text) => setUser(text)}/>

            <TextInput
                style={buttons.input}
                placeholder="name"
                leftIcon={{ type: 'font-awesome', name: 'circle'}}
                onChangeText={(text) => setName(text)}/>

            <TextInput
                style={buttons.input}
                placeholder="*****"
                leftIcon={{ type: 'font-awesome', name: 'lock'}}
                secureTextEntry={true}
                onChangeText={(text) => setSenha(text)}/>

            <TextInput
                style={buttons.input}
                placeholder="email"
                leftIcon={{ type: 'font-awesome', name: 'envelope'}}
                onChangeText={(text) => setEmail(text)}/>

        </View>
        
        <View style={containers.subtitleContainer}>

            <Text style={titles.textBlack}> Already a user? </Text>

            <TouchableOpacity 
                onPress={() => login()}> 
                    <Text style={titles.text}> Sign in </Text> 
            </TouchableOpacity>

        </View>

        <View>
            <TouchableOpacity
                style={buttons.button}
                onPress={() => registerUser()}> 
                    <Text style={buttons.buttonText}> REGISTER </Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView> 
    </View>
}