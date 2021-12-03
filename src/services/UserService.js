import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import config from "../util/config"

class UserService {
    
    async register(data) {
        return axios({
            url: config.API_URL + "create-user",
            method: "POST",
            timeout: config.TIMEOUT_REQUEST,
            data: data,
            headers: config.HEADER_REQUEST
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async login(data) {
        return axios({
            url: config.API_URL + "login",
            method: "POST",
            timeout: config.TIMEOUT_REQUEST,
            data: data,
            headers: config.HEADER_REQUEST
        }).then((response) => {
            if(!response.data.user.accessToken){
                return Promise.reject(response)
            } else {
                AsyncStorage.setItem("TOKEN", response.data.user.accessToken)
                // console.log(response.data.user.accessToken)
                return Promise.resolve(response)
            }
            
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    // async loginWithToken(data){
    //     return axios({
    //         url: config.API_URL + "login-token",
    //         method: "POST",
    //         timeout: config.TIMEOUT_REQUEST,
    //         data: data,
    //         headers: config.HEADER_REQUEST
    //     }).then((response) => {
    //         if (response.data.accessToken){
    //             AsyncStorage.setItem("TOKEN", response.data.accessToken)            
    //             return Promise.resolve(response)
    //         } else{
    //             return Promise.reject(response)
    //         }
    //     }).catch((error) => {
    //         return Promise.reject(error)
    //     })
    // }
}

const userService = new UserService()
export default userService;