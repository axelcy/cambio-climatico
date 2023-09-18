import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    if (user === null) localStorage.removeItem('user')
    else localStorage.setItem('user', JSON.stringify(user))

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}