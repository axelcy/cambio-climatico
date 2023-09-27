import { useContext } from "react"
import { PasswordContext } from "../context/PasswordContext"

export default function usePassword() {
    try {
        const { password, setPassword } = useContext(PasswordContext)
        return [ password, setPassword ]
    }
    catch {
        throw new Error("usePassword debe estar dentro del provider PasswordProvider")
    }
}