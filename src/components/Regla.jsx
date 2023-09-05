import './Regla.css'

const Regla = ({regla, valida, index}) => {
    return (
        <div className={"card-container no-select" + (valida ? " card-valida" : "")}>
            <h6 className='card-index'>{valida ? "✔️" : "❌"} Regla {regla.id}</h6>
            <h3>{regla.titulo}</h3>
            {regla.subtitulo && 
            <>
                <span>{regla.texto || regla.texto === null || undefined ? regla.texto : 'La contraseña debe incluir la respuesta correcta.'}</span>
                <h5>{regla.subtitulo}</h5>
            </>}
            {regla.img && <img src={"reglas/" + regla.img} className={`card-img card-img-${regla.id}`} />}
        </div>
    )
}

export default Regla