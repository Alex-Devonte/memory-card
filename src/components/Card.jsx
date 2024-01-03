import PropTypes from 'prop-types'

Card.propTypes = {
    pokemon: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
    }).isRequired
};

function Card({pokemon}) {
    return (
        <div className="card">
            <h2>#{pokemon.id}</h2>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img}/>
        </div>
    )
}

export default Card;