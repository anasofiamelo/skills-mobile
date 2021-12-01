import React, { useState, useEffect } from 'react';
// imports do react-native
import { 
    StatusBar, 
    SafeAreaView, 
    TextInput,
    TouchableOpacity,
    View,
    Button
} from 'react-native'
// imports do react-native-elements
import { 
    Input, 
    Text 
} from 'react-native-elements'
// style imports
import styledButton from '../styles/buttons'

export default function Register({navigation}) {

    //states
    const [user, setUser] = useState(null)
    const [name, setName] = useState(null)
    const [senha, setSenha] = useState(null)
    const [email, setEmail] = useState(null)

    // useEffect( () => {
    //     fetch('http://localhost:3000/lista', {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // }, [])
    
    //envia os dados do usuário p/ cadastrar no backend
    async function registerUser() {
            fetch('http://localhost:3000/create-user', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: user,
                    nome: name,
                    senha: senha,
                    email: email
                })
            })
            .then( response => response.json )
            .then( console.log('Usuário cadastrado'))
    }
    
    //volta p/ página de login
    const login = () => {
        navigation.navigate('Login')
    }

    return <View style={styledButton.container}>
        <SafeAreaView style={styledButton.container}>
        <StatusBar/>

        <View> 
            <Text h2> REGISTER </Text>
        </View>

        <View style={styledButton.inputContainer}> 
            <Input
                placeholder="user"
                leftIcon={{ type: 'font-awesome', name: 'user'}}
                style={styledButton.input}
                onChangeText={(text) => setUser(text)}/>
            <Input
                placeholder="name"
                leftIcon={{ type: 'font-awesome', name: 'circle'}}
                style={styledButton.input}
                onChangeText={(text) => setName(text)}/>
            <Input
                placeholder="*****"
                leftIcon={{ type: 'font-awesome', name: 'lock'}}
                secureTextEntry={true}
                style={styledButton.input}
                onChangeText={(text) => setSenha(text)}/>
            <Input
                placeholder="email"
                leftIcon={{ type: 'font-awesome', name: 'envelope'}}
                style={styledButton.input}
                onChangeText={(text) => setEmail(text)}/>
        </View>
        
        <View style={styledButton.inputContainer}>
            <TouchableOpacity onPress={() => login()}> 
                <Text style={styledButton.subtext}> Already a user? Sign in </Text> 
            </TouchableOpacity>
        </View>

        <View>
            <Button
                style={styledButton.button}
                title="Register"
                onPress={() => registerUser()}
            />
        </View>

        <Text style={styledButton.subtext}> Forgot your password? </Text>

    </SafeAreaView> 
    </View>
}