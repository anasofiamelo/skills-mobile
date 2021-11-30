import React, { useState } from 'react';
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

export default function Login({navigation}) {

    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)

    const login = () => {
        console.log('entrou')
        console.log(user)
        console.log(password)
        navigation.navigate('Principal')
        // navigation.reset({
        //     index: 0,
        //     routes: [{name: 'Principal'}]
        // })
    }

    return <View style={styledButton.container}>
        <SafeAreaView style={styledButton.container}>
        <StatusBar/>

        <View> 
            <Text h2> SIGN IN </Text>
        </View>

        <View style={styledButton.inputContainer}> 
            <Input
                placeholder="example"
                leftIcon={{ type: 'font-awesome', name: 'envelope'}}
                onChangeText={value => setUser( value )}
                style={styledButton.input}/>

            <Input
                placeholder="*****"
                leftIcon={{ type: 'font-awesome', name: 'lock'}}
                onChangeText={value => setPassword( value )}
                secureTextEntry={true}
                style={styledButton.input}/>
        </View>
        
        <View style={styledButton.inputContainer}>
            <TouchableOpacity> 
                <Text style={styledButton.subtext}>Not a User? Register </Text> 
            </TouchableOpacity>
        </View>

        <View>
            <Button
                style={styledButton.button}
                title="LOGIN"
                onPress={() => login()}
            />
        </View>

        <Text style={styledButton.subtext}> Forgot your password? </Text>

    </SafeAreaView> 
    </View>
}





// fazer um component p/ item passando os parametros do array
/* <FlatList
    data ={servicos}
    renderItem = {({item})} => {
        return <Text> {item.item.nome} </Text>
    }
/> */