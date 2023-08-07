import { useRef, useState } from 'react'
import './Password.css'

function Password() {
    const mainInput = useRef()

    return (
        <>
            <input ref={mainInput} className='main-input' />
        </>
    )
}

export default Password