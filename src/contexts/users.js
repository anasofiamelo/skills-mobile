import React, { createContext, useState, useEffect, useContext } from 'react'
//API
import API from '../services/API'

const UsersContext = createContext({})

export const UsersProvider = ({children}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers(){
        const response = await API.get('/lista')
        setUsers(response.data)
        return users
    }

    return (
        <UsersContext.Provider value={{users}}>
            { children }
        </UsersContext.Provider>
    )
}
export function useUsers(){
    const context = useContext(UsersContext)
    return context
}

export default UsersContext