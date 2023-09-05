import { Form } from "react-bootstrap"
import './GuardarUsuario.css'
import { useRef } from "react"

function GuardarUsuario() {
    const userInput = useRef()

    const handleSave = () => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
        usuarios.push({
            nombre: userInput.current.textContent,
            password: localStorage.getItem('password'),
        })
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
        
        localStorage.setItem('password', '')
        location.reload()
    }

    return (
        <section className='guardar-password-section'>
            <h4 className="text-bg">Ahora elegí tu nombre de usuario 😊</h4>
            <div contentEditable='true' className='user-input' ref={userInput} />
            <img src="/guardar.jpg" className="img-guardar no-select" draggable={false} onClick={handleSave} />
        </section>
    )
}

export default GuardarUsuario