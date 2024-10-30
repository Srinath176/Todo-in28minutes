
import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { retreiveHelloWorld } from "./api/HelloWorldServiceApi"
import { useAuth } from "./security/AuthContext"


function WelcomeComponent() {


    const { username } = useParams()

    const [message, setMessage] = useState(null)
    const authContext = useAuth()

    function callHelloWorldRestApi() {

        retreiveHelloWorld(authContext.token)
        .then((response) =>{ console.log(response); setMessage(response.data)})
        .catch((error) => console.log(error))
        .finally(() => console.log('clean up code buddy!'))
    }


    return (


        <div className="welcome">
            <h1>Welcome {username}, to Todo Management</h1>
            Manage your todos - <Link to="/todos">here</Link>

            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Hello World</button>
                <div>{message}</div>
            </div>
        </div>
    )
}

export default WelcomeComponent