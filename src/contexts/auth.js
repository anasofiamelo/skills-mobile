import React, { createContext, useState, useEffect, useContext } from 'react'
//API
import API from '../services/API'
//Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [token, setToken] = useState('')

    useEffect(() => {
        loadUser()
    }, [])

    async function loadUser(){
        return user
    }
    //json parse
    async function Login(user, senha){
        const response = await API.post('/login', {
            user: user,
            senha: senha
        })
        setUser(response.data.user)
        setToken(response.data.user.accessToken)
        console.log(response.data.user)
        await AsyncStorage.setItem('AUTH:user', JSON.stringify(response.data.user))
        await AsyncStorage.setItem('AUTH:token', response.data.user.accessToken)
    }

    function Logout(){
        AsyncStorage.clear()
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), Login, Logout, user }}>
            { children }
        </AuthContext.Provider>
    )
}
export function useAuth(){
    const context = useContext(AuthContext)
    return context
}

export default AuthContext