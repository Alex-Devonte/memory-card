import { useState } from "react";
import Card from "./Card";
import PropTypes from 'prop-types'

CardList.propTypes = {
    cardDetails: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired
        })
    ).isRequired,
    currentScore: PropTypes.number.isRequired,
    setCurrentScore: PropTypes.func.isRequired,
    setBestScore: PropTypes.func.isRequired
};

function CardList({cardDetails, currentScore, setCurrentScore, setBestScore}) {
    const [clickedCards, setClickedCards] = useState([]);

    const populateGridArray = () => {
        //create an array of numbers from 1 to the length of the cardDetails array
        let gridArr = [];
        for (let i = 1; i <= cardDetails.length; i++) {
            gridArr.push(i);
        }
        return gridArr;
    }

    const shuffleGridArray = () => {
        //Create shallow copy of original grid array
        let shuffledArray = [...gridPositionArray];

        //Loop through the array in reverse
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            //Generate random number between 0 and i to be used for an index
            let j = Math.floor(Math.random() * (i + 1));

            //Swap elements at the specified indexes
            let temp = shuffledArray[i];
            shuffledArray[i] = shuffledArray[j];
            shuffledArray[j] = temp;
        }

        return shuffledArray;
    }

    const resetGame = () => {
        setClickedCards([]);
        setCurrentScore(0);
    };

    const handleClick = (id) => {
        //End the game if user clicks on a repeat
        //Otherwise add that id to the tracking array
        if (clickedCards.includes(id)) {
            alert('YOU LOSE');
            resetGame();
        } else {
            setClickedCards([...clickedCards, id]);
            setCurrentScore(prevScore => prevScore + 1); 
            //Update bestScore if it's greater than the previous bestScore which is currentScore+1
            setBestScore((prevBestScore) => {
                return Math.max(prevBestScore, currentScore + 1);
            });
        }
    };
    
    const gridPositionArray = populateGridArray();
    const newGridPositionArray = shuffleGridArray();

    return (
        <div id="card-list">
            {cardDetails.map((detail, key) => {
                return <Card key={key} pokemon={detail} gridPosition={newGridPositionArray[key]} onClick={handleClick}/>;
            })}
        </div>
    )
}

export default CardList;