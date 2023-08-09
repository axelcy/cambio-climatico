import { useEffect, useRef, useState } from 'react'
import './Password.css'
import reglasMock from '../mocks/reglas'
import Card from '../components/Card'

function Password() {
    const [reglasActivas, setReglasActivas] = useState([])
    const [inputLength, setInputLength] = useState(0)

    const devolverNuevasReglas = (password) => {
        let cantValidas = 1
        let nuevasReglas = reglasMock.map(regla => ({...regla, valida: regla.validar(password)}))
        nuevasReglas = nuevasReglas.filter(regla => {
            if (regla.valida && cantValidas !== 0) {
                cantValidas--
                return true
            }
            if (regla.valida && cantValidas === 0) return false
            return true
        })
        return nuevasReglas.slice(0, 3 - cantValidas)
    }
    const handleInputChange = e => {
        setReglasActivas(devolverNuevasReglas(e.target.textContent))
        setInputLength(e.target.textContent.length)
    }
    
    useEffect(() => setReglasActivas(devolverNuevasReglas(reglasActivas)), [])

    return (
        <main className='password-container no-select'>
            <section className='input-section'>
                <label htmlFor="mainInput"><h3 className='text-bg'>🔑 Ingrese su contraseña</h3></label>
                <div contentEditable='true' placeholder='Ingrese su contraseña' id='mainInput' onInput={handleInputChange} className='main-input'>   
                </div>
                <h5 contentEditable='false' className='text-bg input-length no-select'>{inputLength}</h5>          
            </section>
            <section className='req-section'>
                {
                    reglasActivas.map((regla, index) => (
                        <Card regla={regla} index={index} key={regla.id} valida={regla.valida} />
                    ))
                }
                {
                    JSON.stringify(reglasActivas)
                }
            </section>
        </main>
    )
}

export default Password