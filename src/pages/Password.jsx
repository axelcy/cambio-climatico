import { useRef, useState } from 'react'
import './Password.css'

function Password() {
    const mainInput = useRef()

    return (
        <main className='password-container'>
            <section className='input-section'>
                <label htmlFor="mainInput"><h3>Ingrese su contraseña:</h3></label>
                <textarea id='mainInput' ref={mainInput} className='main-input' rows={1}>
                </textarea>
            </section>
            <section className='req-section'>

            </section>
        </main>
    )
}

export default Password