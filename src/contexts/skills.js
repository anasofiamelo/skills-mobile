import React, { createContext, useState, useEffect, useContext } from 'react'
//API
import API from '../services/API'

const SkillsContext = createContext({})
export const SkillsProvider = ({children}) => {

    const [skills, setSkills] = useState([])

    useEffect(() => {
        loadSkills()
    }, [])

    async function loadSkills() {
        const response = await API.get('/habilidades')
        setSkills(response.data)
        return skills
    }

    return (
        <SkillsContext.Provider value={{}}>
            { children }
        </SkillsContext.Provider>
    )
}
export function useSkills(){
    const context = useContext(SkillsContext)
    return context
} 