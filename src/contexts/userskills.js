// import React, { createContext, useState, useEffect, useContext } from 'react'
// //API
// import API from '../services/API'
// //auth context
// import { useAuth } from './auth'

// const UserSkillsContext = createContext({})

// export const UserSkillsProvider = ({children}) => {
//     const { user } = useAuth();
//     const [userSkills, setUserSkills] = useState([])

//     useEffect(() => {
//         loadUserSkills(user.id)
//     }, [])

//     async function loadUserSkills(id) {
//         const response = await API.get(`/users/${id}/habilidades`)
//         setUserSkills(response.data)
//     }

//     return (
//         <UserSkillsContext.Provider value={{userSkills, loadUserSkills}}>
//             { children }
//         </UserSkillsContext.Provider>
//     )

// }
// export function useUserSkills(){
//     const context = useContext(UserSkillsContext)
//     return context
// } 

// export default UserSkillsContext