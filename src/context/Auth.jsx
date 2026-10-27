import { useContext, useEffect } from "react"
import { createContext, useState } from "react"

const Auth = createContext()

const initialState = { isAuth: false, user: {} }

const AuthContext = ({ children }) => {

    const [state, setState] = useState(initialState)
    const [isAppLoading, setIsAppLoading] = useState(true)

    useEffect(() => {
        const readProfile = () => {
            const user = JSON.parse(localStorage.getItem("user"))
            if (user) {
                setState({ isAuth: true, user })
            }
            setTimeout(() => {
                setIsAppLoading(false)
            }, 850)
        };
        readProfile();
    }, [])

    const handleLogOut = () => {
        localStorage.removeItem("user")
        setState(initialState)
    }

    return (

        <Auth.Provider value={{ ...state, isAppLoading, handleLogOut, dispatch: setState }}>
            {children}
        </Auth.Provider>

    )
}

export default AuthContext

export const useAuth = () => useContext(Auth)