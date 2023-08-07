import './Card.css'

const Card = ({regla, valida, index}) => {
    return (
        <div className={"card-container no-select" + (valida ? " card-valida" : "")}>
            <h6 className='card-index'>{valida ? "✔️" : "❌"} Regla {index+1}</h6>
            <h3>{regla.desc}</h3>
        </div>
    )
}

export default Card