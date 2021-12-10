import React, { createContext, useState, useEffect, useContext } from 'react'
//API
import API from '../services/API'
//Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [token, setToken] = useState('')
    const [userSkills, setUserSkills] = useState([])

    useEffect(() => {
        loadUser()
    }, [])

    async function loadUser(){
        const userString = await AsyncStorage.getItem('AUTH:user')
        const userJSON = JSON.parse(userString)
        setUser(userJSON)
    }
    //json parse
    async function Login(user, senha){
        const response = await API.post('/login', {
            user: user,
            senha: senha
        })
        console.log(response.status)
        if(response.status == undefined){
            alert('Invalid user or password', [
                {text: 'ok'}
            ])
        } else {
            loadUserSkills(response.data.user.id)
            setUser(response.data.user)
            setToken(response.data.user.accessToken)
            await AsyncStorage.setItem('AUTH:user', JSON.stringify(response.data.user))
            await AsyncStorage.setItem('AUTH:token', response.data.user.accessToken)
        }
        
    }
    async function Register(user, senha, name, email){
        const response = await API.post('/create-user', {
            user: user,
            nome: name,
            email: email,
            senha: senha
        })
        if(response.status == 200){
            alert('Successfully registered', [
                {text: 'ok', onPress: () => console.log('alert closed')}
            ])
        } else {
            alert('Error: ' + response.status)
        }
    }

    async function loadUserSkills(id) {
        const response = await API.get(`/users/${id}/habilidades`)
        setUserSkills(response.data)
    }

    function Logout(){
        setUser(null);
        AsyncStorage.clear()
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), Login, Logout, Register, user, userSkills, loadUserSkills }}>
            { children }
        </AuthContext.Provider>
    )
}
export function useAuth(){
    const context = useContext(AuthContext)
    return context
}

export default AuthContext