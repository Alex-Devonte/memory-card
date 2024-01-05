import { useState, useEffect } from 'react'
import './card.css'
import CardList from './components/CardList'
import axios from 'axios';
import Scoreboard from './components/Scoreboard';

function App() {
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

  //Array of Pokemon to be used in API request
  const pokemonList = ['bulbasaur', 'charmander', 'squirtle', 'mewtwo', 'gloom', 'pikachu', 'pichu', 'plusle', 'minun', 'jigglypuff'];
  const [cardDetails, setCardDetails] = useState([{id: '', name: '', img: ''}]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const fetchData = (pokemon) => {
    return axios.get(`${BASE_URL}${pokemon}`)
      .then(response => response.data)
      .catch(error => {
        console.log(error);
      });
  };

  //Create array of unresolved promises from fetchData
  const pokemonPromises = pokemonList.map(pokemon => fetchData(pokemon));
  useEffect(() => {
    //Waits for all the promises to resolve before sending the data to the callback
    Promise.all(pokemonPromises)
      .then(pokemonData => { 
        processData(pokemonData); 
      })
      .catch(error => {
        console.log(error);
    });
  },[]);

  //Function for extracting only the needed data from the object
  function processData(data) {
    const newArray = [];

    //Iterate over each item in the oject and push the chosen data into an array
    data.forEach(pokemon => {
      //Ensure the id always has 4 digits like an actual Pokedex entry
      const id = pokemon.id.toString().padStart(4, '0');
      const name = pokemon.name;
      const img = pokemon.sprites.other.dream_world.front_default;

      newArray.push({id: id, name: name, img: img});
    });

    //Update the state with the modified data
    setCardDetails(newArray);
  }

  return (
    <div id="container">
      <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
      { cardDetails.length > 1 ? <CardList cardDetails={cardDetails} currentScore={currentScore} setCurrentScore={setCurrentScore} setBestScore={setBestScore}/> : null}
    </div>
  )
}

export default App
