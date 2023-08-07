import './Card.css'

const Card = ({regla, valida}) => {
    var classList = "card-container no-select"
    if (valida) classList += " card-valida"
    return (
        <div className={classList}>
            <h3>{regla.desc}</h3>
        </div>
    )
}

export default Card