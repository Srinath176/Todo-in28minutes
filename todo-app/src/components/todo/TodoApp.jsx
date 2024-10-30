import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './TodoApp.css';
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodoComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import AuthProvider, { useAuth } from './security/AuthContext'
import TodoComponent from './TodoComponent';


function AuthenticatedRouter({ children }) {

    const authContext = useAuth()

    if (authContext.isAuthenticated)
        return children

    return <Navigate to="/" />


}

export default function TodoApp() {

    return (

        <div className='todoApp'>

            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />


                        <Route path='/welcome/:username' element=
                            {
                                <AuthenticatedRouter>
                                    <WelcomeComponent />
                                </AuthenticatedRouter>
                            } />


                        <Route path='/todos' element={
                            <AuthenticatedRouter>
                                <ListTodosComponent />
                            </AuthenticatedRouter>
                        } />

                        <Route path='/todo/:id' element={
                            <AuthenticatedRouter>
                                <TodoComponent />
                            </AuthenticatedRouter>
                        } />

                        <Route path='/logout' element={
                            <AuthenticatedRouter>
                                <LogoutComponent />
                            </AuthenticatedRouter>
                        } />

                        <Route path='*' element={<ErrorComponent />}> </Route>
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>



        </div>

    )
}










