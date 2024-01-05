import PropTypes from 'prop-types'

Card.propTypes = {
    pokemon: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
    }).isRequired,
    gridPosition: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

function Card({pokemon, gridPosition, onClick}) {
    const handleClick = () => {
        //Send the pokemon id to the parent component
        onClick(pokemon.id);
    };

    return (
        <div className="card" style={{order: gridPosition}} onClick={handleClick}>
            <div className="info">
                <p className="poke-id">#{pokemon.id}</p>
                <p className="poke-name">{pokemon.name}</p>
            </div>
            <img className="poke-img" src={pokemon.img}/>
        </div>
    )
}

export default Card;