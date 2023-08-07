import './Card.css'

const Card = ({regla}) => {
    return (
        <div className="card-container no-select">
            <h3>{regla.desc}</h3>
        </div>
    )
}

export default Card