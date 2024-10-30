import { createContext, useContext, useState } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticate] = useState(false)
    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)

    // async function login(username, password) {


    //     const baToken = 'Basic ' + window.btoa(username + ":" + password) //basic-authentication token
    //     const response = await executeBaiscAuthenticationService(baToken)

    //     try {

    //         if (response.status === 200) {

    //             setAuthenticate(true)
    //             setUsername(username)
    //             setToken(baToken)

    //             apiClient.interceptors.request.use(
    //                 (config) => {
    //                     config.headers.Authorization=baToken
    //                     return config
    //                 }
    //             )

    //             return true

    //         } else {

    //             logout()
    //             return false
    //         }
    //     } catch(error) {
    //         logout()
    //         return false

    //     }
    // }

    async function login(username, password) {


        const response = await executeJwtAuthenticationService(username, password)

        try {

            if (response.status === 200) {

                const jwtToken = 'Bearer ' + response.data.token

                setAuthenticate(true)
                setUsername(username)
                setToken(jwtToken)

                apiClient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization=jwtToken
                        return config
                    }
                )

                return true

            } else {

                logout()
                return false
            }
        } catch(error) {
            logout()
            return false

        }
    }

    function logout() {
        setAuthenticate(false)
        setToken(null)
        setUsername(null)
    }

    return (

        <AuthContext.Provider value={{ isAuthenticated, setAuthenticate, login, logout, username, token }}>
            {children}
        </AuthContext.Provider>

    )
}