import './Card.css'

const Card = ({regla, valida, index}) => {
    var classList = "card-container no-select"
    if (valida) classList += " card-valida"
    return (
        <div className={classList}>
            <h3>{index+1}. {regla.desc}</h3>
        </div>
    )
}

export default Card