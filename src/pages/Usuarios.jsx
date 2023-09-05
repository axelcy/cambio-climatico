import './Usuarios.css'

function Usuarios() {

    return (
        <main>
            <label className='no-select'><h1 className='titulo-reglas no-select'>Usuarios ganadores 🏆👨</h1></label>
            <section className='usuarios-section no-select'>
            {
                JSON.parse(localStorage.getItem('usuarios'))?.map((usuario, index) => (
                    <article key={index} className='user-card no-select'>
                        <h3 className='no-select'>{usuario.nombre}</h3>
                        <div className='user-password no-select'>
                            <h5 className='no-select'>{usuario.password}</h5>
                        </div>
                    </article>
                ))
            }
            </section>
        </main>
    )
}

export default Usuarios