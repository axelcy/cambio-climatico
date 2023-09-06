import { Form } from "react-bootstrap"
import './GuardarUsuario.css'
import { useRef, useState } from "react"
import { Link } from "react-router-dom"

function GuardarUsuario() {
    const userInput = useRef()
    const [texto, setTexto] = useState(false)

    const handleSave = () => {
        // localStorage.clear()
        if (!userInput.current.textContent) return setTexto('Es necesario ingresar tu nombre.')
        if (userInput.current.textContent.length > 18) return setTexto('Tu nombre no puede tener más de 18 caracteres.')
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
        usuarios.push({
            nombre: userInput.current.textContent,
            password: localStorage.getItem('password'),
        })
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
        
        localStorage.setItem('password', '')
        document.getElementById('link-usuarios').click()
        location.reload()
    }

    return (
        <section className='guardar-password-section'>
            <Link to={'/usuarios'} className="d-none" id="link-usuarios"></Link>
            <h4 className="text-bg">Ahora elegí tu nombre de usuario (esta vez es fácil) 😊</h4>
            <div contentEditable='true' id="userInput" className='user-input' ref={userInput} />
            <img src="/guardar.jpg" className="img-guardar no-select" draggable={false} onClick={handleSave} />
            {
                texto && <span className="text-bg">{texto}</span>
            }
        </section>
    )
}

export default GuardarUsuario