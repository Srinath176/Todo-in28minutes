
import { apiClient } from "./ApiClient";




export const retreiveHelloWorld = 
    (token) => apiClient.get("/hello-world")


export const retreiveHelloWorldPathVariable =
    (username) => apiClient.get(`/hello-world/path-variable/{username}`)


