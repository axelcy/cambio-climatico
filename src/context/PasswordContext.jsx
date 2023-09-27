import { createContext, useState } from "react"

export const PasswordContext = createContext()

export const PasswordProvider = ({ children }) => {
    console.log(localStorage.getItem('password'))
    const [password, setPassword] = useState(localStorage.getItem('password') || '')

    // console.log(password)
    if (password === '') localStorage.removeItem('password')
    else localStorage.setItem('password', JSON.stringify(password))

    return (
        <PasswordContext.Provider value={{ password, setPassword }}>
            {children}
        </PasswordContext.Provider>
    )
}