import { useRef, useState } from 'react'
import './Password.css'
import reglasMock from '../mocks/reglas'
import Card from '../components/Card'

function Password() {
    const [reglas] = useState(reglasMock)
    const [reglasActivas, setReglasActivas] = useState(reglasMock)

    const [inputLength, setInputLength] = useState(0)
    const handleInputChange = e => {
        setReglasActivas(reglas.map(regla => ({...regla, valida: regla.validar(e.target.textContent)})))
        // setReglas(reglas.map(regla => ({...regla, valida: regla.validar(e.target.textContent)})))
        setInputLength(e.target.textContent.length)
    }

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
                        <Card regla={regla} index={index} key={index} valida={regla.valida} />
                    ))
                }
            </section>
        </main>
    )
}

export default Password