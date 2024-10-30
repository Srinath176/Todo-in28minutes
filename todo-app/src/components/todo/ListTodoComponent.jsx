import { useEffect, useState } from "react"
import { deleteTodoApi, retreiveAllTodosForUserApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

function ListTodosComponent() {

    // const today = new Date()
    // const targetDate = new Date(today.getFullYear() + 10, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)

    const authContext = useAuth()
    const username = authContext.username
    const navigate = useNavigate()


    useEffect ( () => refreshTodos())


    function refreshTodos() {
        retreiveAllTodosForUserApi(username)
            .then(response => setTodos(response.data))
            .catch(error => console.log(error))
    }


    function deleteTodo(id) {

        deleteTodoApi(username, id)
            .then(

                () => {
                    setMessage(`Delete todo with id = ${id} successfull`)
                    refreshTodos()
                }
            )
            .catch(error => console.log(error))
    }



    function updateTodo(id) {
        console.log("updated "+id)
        navigate(`/todo/${id}`)
    }



    function addNewTodo(){
        navigate(`/todo/-1`)
    }

    return (

        <div className='ListTodosComponent'>
            <h1>Things You want to do</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Done?</th>
                            <th>TargetDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                       
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>

                                        <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button></td>
                                    </tr>

                                )
                            )
                        }

                    </tbody>
                </table>
                <button className="btn btn-success m-5" onClick={addNewTodo}>Add New Todo</button>
            </div>

        </div>
    )
}

export default ListTodosComponent