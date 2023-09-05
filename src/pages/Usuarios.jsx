import './Usuarios.css'

function Usuarios() {

    return (
        <main>
            <label className='no-select'><h1 className='titulo-reglas'>Usuarios ganadores 🏆👨</h1></label>
            <section className='usuarios-section'>
            {
                JSON.parse(localStorage.getItem('usuarios'))?.map((usuario, index) => (
                    <article key={index} className='user-card'>
                        <h3>{usuario.nombre}</h3>
                        <div className='user-password'>
                            <h5>{usuario.password}</h5>
                        </div>
                    </article>
                ))
            }
            </section>
        </main>
    )
}

export default Usuarios