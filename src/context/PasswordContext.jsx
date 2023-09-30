import { createContext, useState } from "react"

export const PasswordContext = createContext('')

export const PasswordProvider = ({ children }) => {
    const [password, setPassword] = useState(localStorage.getItem('password') || '')
    localStorage.setItem('password', password)

    return (
        <PasswordContext.Provider value={{ password, setPassword }}>
            {children}
        </PasswordContext.Provider>
    )
}