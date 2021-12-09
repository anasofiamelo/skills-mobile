import React, { createContext, useState, useEffect, useContext } from 'react'
//API
import API from '../services/API'
//auth context
import { useAuth } from './auth'

const UserSkillsContext = createContext({})

export const UserSkillsProvider = ({children}) => {
    const { user } = useAuth();
    const [userSkills, setUserSkills] = useState([])

    useEffect(() => {
        loadUserSkills()
    }, [])

    async function loadUserSkills() {
        const response = await API.get(`/users/${user.id}/habilidades`)
        setUserSkills(response.data)
        console.log(user.id)
    }

    return (
        <UserSkillsContext.Provider value={{userSkills}}>
            { children }
        </UserSkillsContext.Provider>
    )
}
export function useUserSkills(){
    const context = useContext(UserSkillsContext)
    return context
} 

export default UserSkillsContext