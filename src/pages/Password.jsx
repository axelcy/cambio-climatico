import { useEffect, useRef, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'
import './Password.css'
import reglasMock from '../mocks/reglas'
import Card from '../components/Card'

function Password() {
    const [reglasActivas, setReglasActivas] = useState([])
    const [inputLength, setInputLength] = useState(0)
    const [strength, setStrength] = useState(0)
    const strengthRef = useRef()
    const validarReglas = (password) => reglasMock.map(regla => ({...regla, valida: regla.validar(password)}))

    // hacer que te diga la complejidad de la contraseña (%) segun las reglas y longitud
    // una barrita abajo del input con porcentaje

    const devolverNuevasReglas = (reglas) => {
        // const reglas = validarReglas(password)
        let nuevasReglas = reglas.filter(regla => !regla.valida)
        let reglasValidas = reglas.filter(regla => regla.valida).reverse()
        nuevasReglas = nuevasReglas.slice(0, 3)
        reglasValidas[0] && nuevasReglas.unshift(reglasValidas[0])
        return nuevasReglas
    }
    const strengthCheck = (reglas) => {
        // porcentaje de completadas
        let validas = 0
        reglas.forEach(regla => regla.valida && validas++)
        return validas / reglas.length * 100
    }
    const handleInputChange = e => {
        const reglas = validarReglas(e.target.textContent)
        setReglasActivas(devolverNuevasReglas(reglas))
        setStrength(strengthCheck(reglas))
        setInputLength(e.target.textContent.length)
    }
    
    useEffect(() => setReglasActivas(devolverNuevasReglas(reglasMock)), [])

    return (
        <main className='password-container no-select'>
            <section className='input-section'>
                <label htmlFor="mainInput"><h3 className='text-bg'>🔑 Ingrese su contraseña</h3></label>
                <div className='input-container'>
                    <div contentEditable='true' placeholder='Ingrese su contraseña' id='mainInput' onInput={handleInputChange} className='main-input' />
                    <h5 className='text-bg strength' ref={strengthRef}>🔒 Fuerza: {strength}%</h5>
                    {/* <progress className='strengthMeter' max={100} value={strength}></progress> */}
                    <ProgressBar className='strengthMeter' animated now={strength} max={100} min={0} />
                </div>
                <h5 className='text-bg input-length no-select'>{inputLength}</h5>
            </section>
            <section className='req-section'>
                {
                    reglasActivas.map((regla, index) => (
                        <Card regla={regla} index={index} key={regla.id} valida={regla.valida} />
                    ))
                }
            </section>
        </main>
    )
}

export default Password