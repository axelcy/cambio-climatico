import { Button } from 'react-bootstrap'
import './Reglas.css'

function Reglas() {
    const handleScroll = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    return (
        <main>
            <h1>Reglas</h1>
            <h2>Acá se van a mostrar todas las reglas, estén completadas o no</h2>

            <Button variant='info' onClick={handleScroll} className='scroll-button'>Voler arriba</Button>
        </main>
    )
}

export default Reglas