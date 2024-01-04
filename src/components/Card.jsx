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
            <h2>#{pokemon.id}</h2>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img}/>
        </div>
    )
}

export default Card;