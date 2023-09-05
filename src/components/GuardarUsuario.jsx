import { Form } from "react-bootstrap"
import './GuardarUsuario.css'
import { useRef, useState } from "react"

function GuardarUsuario() {
    const userInput = useRef()
    const [mostrarTexto, setMostrarTexto] = useState(false)

    const handleSave = () => {
        if (!userInput.current.textContent) return setMostrarTexto(true)
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
            <h4 className="text-bg">Ahora elegí tu nombre de usuario (esta vez es fácil) 😊</h4>
            <div contentEditable='true' id="userInput" className='user-input' ref={userInput} />
            <img src="/guardar.jpg" className="img-guardar no-select" draggable={false} onClick={handleSave} />
            {
                mostrarTexto && <span className="text-bg">Es necesario ingresar tu nombre.</span>
            }
        </section>
    )
}

export default GuardarUsuario