import { useEffect, useRef, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'
import GuardarUsuario from '../components/GuardarUsuario'
import Regla from '../components/Regla'
import usePassword from '../hooks/usePassword'
import useRules from '../hooks/useRules'
import useStrength from '../hooks/useStrength'
import { reglaFinal } from '../mocks/reglas'
import './Password.css'

function Password() {
    const { password, setPassword } = usePassword()

    const [reglasActivas, setReglasActivas] = useState([])
    const [strength, setStrength] = useState(0)
    const mainInput = useRef()

    const handleReglasActivas = (reglas) => {
        let nuevasReglas = reglas.filter(regla => !regla.valida).slice(0, 3)
        if (!nuevasReglas.length) return [reglaFinal]
        let reglasValidas = reglas.filter(regla => regla.valida).reverse()
        reglasValidas.length && nuevasReglas.unshift(reglasValidas[0])
        return nuevasReglas
    }

    const handleInputChange = e => {
        const inputPassword = e.target.textContent
        // useRules devuelve un array de objetos con las reglas y si se cumplen o no
        const reglas = useRules(inputPassword)
        // useStrength devuelve un número entre 0 y 100 que representa la fuerza de la contraseña
        setStrength(useStrength(inputPassword))
        localStorage.setItem('strength', useStrength(inputPassword))
        // handleReglasActivas devuelve un array con las reglas activas
        setReglasActivas(handleReglasActivas(reglas))
        setPassword(inputPassword)
    }
    
    useEffect(() => {
        document.getElementById('mainInput').textContent = password
        // acomodar las reglas activas según la contraseña
        setReglasActivas(handleReglasActivas(useRules(password)))
        setStrength(useStrength(password))
    }, [])

    const handlePaste = (e) => {
        e.preventDefault() // Evitar la acción de pegar predeterminada
        const text = e.clipboardData.getData('text/plain')
        document.execCommand('insertText', false, text)
    }

    return (
        <main className='password-container no-select'>
            <section className='input-section'>
                <label htmlFor="mainInput"><h3 className='text-bg'>🔑 Ingrese su contraseña</h3></label>
                <article className='input-container'>
                    <div contentEditable='true' placeholder='Ingrese su contraseña' id='mainInput' ref={mainInput} 
                        onInput={handleInputChange} onPaste={handlePaste} className='main-input' />
                    <h5 className='text-bg strength'>🔒 Fuerza: {strength}%</h5>
                    <ProgressBar className='strengthMeter' animated now={strength} max={100} min={0} />
                </article>
                <h5 className='text-bg input-length no-select'>{password.length}</h5>
            </section>
            <section className='req-section'>
                {
                    reglasActivas.map((regla, index) => (
                        <Regla regla={regla} index={index} key={regla.id} valida={regla.valida} />
                    ))
                }
            </section>
            { strength === 100 &&<GuardarUsuario /> }
        </main>
    )
}

export default Password