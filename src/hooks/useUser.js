import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export default function useUser() {
    try {
        const { user, setUser } = useContext(UserContext)
        return [ user, setUser ]
    }
    catch {
        throw new Error("useUser debe estar dentro del provider UserContext")
    }
}