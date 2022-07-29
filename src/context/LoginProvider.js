import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const AuthContext = createContext()

const LoginProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token') || '')
    const [userData, setUserData] = useState(null)
    const navigate= useNavigate()

    const handleLogin = async () => {
            try {
                const res = await axios.get('https://www.mockachino.com/06c67c77-18c4-45/login')
                localStorage.setItem('token',res.data.access_token)
                setToken(res.data.access_token)
                setUserData(res.data)
                navigate('/dashboard')
            } catch (error) {
                console.log(error)
            }
            
          
    }

    const handleLogout = () => {
        setToken(null)
        localStorage.clear()
    }


    useEffect(() => {
        if (token) {
            handleLogin()
        }

    }, [])


    return (
        <AuthContext.Provider value={{
              token,
              userData,
              handleLogin,
              handleLogout,
         }}
         >
            {children}
        </AuthContext.Provider>
    )
}

export default LoginProvider
