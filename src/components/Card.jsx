import './Card.css'

const Card = ({regla, valida, index}) => {
    return (
        <div className={"card-container no-select" + (valida ? " card-valida" : "")}>
            <h6 className='card-index'>{valida ? "✔️" : "❌"} Regla {regla.id}</h6>
            <h3>{regla.desc}</h3>
            {regla.opciones && 
            <>
                {!regla.ocultarTexto && <span>La contraseña debe incluir la respuesta correcta.</span>}
                <h5>{regla.opciones}</h5>
            </>}
            {regla.img && <img src={"/reglas/" + regla.img} className={`card-img card-img-${regla.id}`} />}
        </div>
    )
}

export default Card