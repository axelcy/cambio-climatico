import { useEffect, useRef, useState } from 'react'
import './Password.css'
import reglasMock from '../mocks/reglas'
import Card from '../components/Card'

function Password() {
    const [reglasActivas, setReglasActivas] = useState([])
    const [inputLength, setInputLength] = useState(0)
    // hacer que te diga la complejidad de la contraseña (%) segun las reglas y longitud
    // una barrita abajo del input con porcentaje
    const devolverNuevasReglas = (password) => {
        const reglas = reglasMock.map(regla => ({...regla, valida: regla.validar(password)}))
        let nuevasReglas = reglas.filter(regla => !regla.valida)
        let reglasValidas = reglas.filter(regla => regla.valida).reverse()

        nuevasReglas = nuevasReglas.slice(0, 3)
        reglasValidas[0] && nuevasReglas.unshift(reglasValidas[0])

        return nuevasReglas
        
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
                <div contentEditable='true' placeholder='Ingrese su contraseña' id='mainInput' onInput={handleInputChange} className='main-input' />
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