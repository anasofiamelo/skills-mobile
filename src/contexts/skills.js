import React, { createContext, useState, useEffect, useContext } from 'react'
//API
import API from '../services/API'

const SkillsContext = createContext({})

export const SkillsProvider = ({ children }) => {
    const [skills, setSkills] = useState([])
    
    async function getSkills(){
        const response = await API.get(`/users/7/habilidades`)
        console.log(response.data)
    }

    return (
        <SkillsContext.Provider value={{getSkills}}>
            { children }
        </SkillsContext.Provider>
    )
}

export default SkillsContext