import { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'
import './Password.css'
import reglasMock from '../mocks/reglas'
import Card from '../components/Card'

function Password() {
    const [reglasActivas, setReglasActivas] = useState([])
    const [inputLength, setInputLength] = useState(0)
    const [strength, setStrength] = useState(0)

    const validarReglas = (password) => reglasMock.map(regla => ({...regla, valida: regla.validar(password)}))
    const strengthCheck = (reglas) => Math.round(reglas.filter(regla => regla.valida).length / reglas.length * 100)

    const actualizarReglas = (reglas) => {
        let nuevasReglas = reglas.filter(regla => !regla.valida).slice(0, 3)
        let reglasValidas = reglas.filter(regla => regla.valida).reverse()
        reglasValidas.length && nuevasReglas.unshift(reglasValidas[0])
        return nuevasReglas
    }

    const handleInputChange = e => {
        const reglas = validarReglas(e.target.textContent)
        setReglasActivas(actualizarReglas(reglas))
        setStrength(strengthCheck(reglas))
        setInputLength(e.target.textContent.length)
    }
    
    useEffect(() => setReglasActivas(actualizarReglas(reglasMock)), [])

    return (
        <main className='password-container no-select'>
            <section className='input-section'>
                <label htmlFor="mainInput"><h3 className='text-bg'>🔑 Ingrese su contraseña</h3></label>
                <div className='input-container'>
                    <div contentEditable='true' placeholder='Ingrese su contraseña' id='mainInput' onInput={handleInputChange} className='main-input' />
                    <h5 className='text-bg strength'>🔒 Fuerza: {strength}%</h5>
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