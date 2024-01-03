import Card from "./Card";
import PropTypes from 'prop-types'

CardList.propTypes = {
    cardDetails: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired
        })
    ).isRequired
};

function CardList({cardDetails}) {
    return (
        <>
            {cardDetails.map((detail, key) => {
                return <Card key={key} pokemon={detail}/>;
            })}
        </>
    )
}

export default CardList;