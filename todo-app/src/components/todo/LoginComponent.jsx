import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./security/AuthContext"


function LoginComponent() {

    const [username, setUsername] = useState("in28minutes")
    const [password, setPassword] = useState('')
    const [error, setErrorMessage] = useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    async function handleSubmit() {

        if (await authContext.login(username,password)) {

            navigate(`/welcome/${username}`)

        } else {
          
            setErrorMessage(true)
        }

    }


    return (


        <div className="login">
            <h1>Login to proceed</h1>

            {error && <div className='errorMessage' style={{ color: "red" }}>Authentication failed, please provide valid credentials!</div>}

            <div className="loginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="passaword" value={password} onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <button type="button" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent