import { useRef, useState } from 'react'
import './Password.css'
import reglasMock from '../mocks/reglas'
import Card from '../components/Card'
import useValidar from '../hooks/useValidar'

function Password() {
    const mainInput = useRef()
    const [reglas, setReglas] = useState(reglasMock)
    const [inputLength, setInputLength] = useState(0)

    const handleChange = e => {
        setReglas(useValidar(e.target.value, [...reglas]))
        setInputLength(e.target.value.length)
    }

    return (
        <main className='password-container no-select'>
            <section className='input-section'>
                <label htmlFor="mainInput"><h3>Ingrese su contraseña:</h3></label>
                <textarea id='mainInput' onChange={handleChange} ref={mainInput} className='main-input' rows={1}>
                </textarea>
                <span>{inputLength}</span>
            </section>
            <section className='req-section'>
                {
                    reglas.map((regla, index) => (
                        <Card regla={regla} index={index} key={index} valida={regla.valida} />
                    ))
                }
            </section>
        </main>
    )
}

export default Password