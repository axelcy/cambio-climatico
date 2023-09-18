import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export default function useUsuario() {
    try {
        const { user, setUser } = useContext(UserContext)
        return [ user, setUser ]
    }
    catch {
        throw new Error("useUser debe estar dentro del provider UserContext")
    }
}