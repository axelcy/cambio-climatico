import { useRef, useState } from 'react'
import './Password.css'
import reglasMock from '../mocks/reglas'
import Card from '../components/Card'

function Password() {
    const mainInput = useRef()
    const reglas = reglasMock

    return (
        <main className='password-container'>
            <section className='input-section'>
                <label htmlFor="mainInput"><h3>Ingrese su contraseña:</h3></label>
                <textarea id='mainInput' ref={mainInput} className='main-input' rows={1}>
                </textarea>
            </section>
            <section className='req-section'>
                {
                    reglas.map((regla) => (
                        <Card regla={regla} />
                    ))
                }
            </section>
        </main>
    )
}

export default Password