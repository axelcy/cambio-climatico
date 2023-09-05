import { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'
import './Password.css'
import Regla from '../components/Regla'
import useRules from '../hooks/useRules'
import useStrength from '../hooks/useStrength'
import GuardarUsuario from '../components/GuardarUsuario'

function Password() {
    const [reglasActivas, setReglasActivas] = useState([])
    const [inputLength, setInputLength] = useState(0)
    const [strength, setStrength] = useState(0)

    const handleReglasActivas = (reglas) => {
        let nuevasReglas = reglas.filter(regla => !regla.valida).slice(0, 3)
        if (!nuevasReglas.length) {
            return [{
                id: 'Final',
                titulo: 'Haberse divertido, no hay más reglas por ahora.',
                texto: true,
                subtitulo: 'Fin :)',
                valida: true
            }]
        }
        let reglasValidas = reglas.filter(regla => regla.valida).reverse()
        reglasValidas.length && nuevasReglas.unshift(reglasValidas[0])
        return nuevasReglas
    }

    const handleInputChange = e => {
        const password = e.target.textContent
        // useRules devuelve un array de objetos con las reglas y si se cumplen o no
        const reglas = useRules(password)
        // useStrength devuelve un número entre 0 y 100 que representa la fuerza de la contraseña
        setStrength(useStrength(password))
        localStorage.setItem('strength', useStrength(password))
        // handleReglasActivas devuelve un array con las reglas activas
        setReglasActivas(handleReglasActivas(reglas))
        setInputLength(password.length)
        localStorage.setItem('password', e.target.textContent)
    }
    
    useEffect(() => {
        document.getElementById('mainInput').textContent = localStorage.getItem('password') || ''
        // acomodar las reglas activas según la contraseña guardada en localStorage
        setReglasActivas(handleReglasActivas(useRules(localStorage.getItem('password') || '')))
        setStrength(useStrength(localStorage.getItem('password') || ''))
    }, [])

    return (
        <main className='password-container no-select'>
            <section className='input-section'>
                <label htmlFor="mainInput"><h3 className='text-bg'>🔑 Ingrese su contraseña</h3></label>
                <article className='input-container'>
                    <div contentEditable='true' placeholder='Ingrese su contraseña' id='mainInput' onInput={handleInputChange} className='main-input' />
                    <h5 className='text-bg strength'>🔒 Fuerza: {strength}%</h5>
                    <ProgressBar className='strengthMeter' animated now={strength} max={100} min={0} />
                </article>
                <h5 className='text-bg input-length no-select'>{inputLength}</h5>
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