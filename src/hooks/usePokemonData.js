import { useState, useEffect } from 'react';
import axios from 'axios';

export default function usePokemonData(props) {

  /* create a state object that contains all values and updates all values 
  - State will be an object
    - the randomPokemon key will hold data on three randomly selected pokemon which will be displayed initially
    - the searchedPokemon will hold the data on the pokemon requested by the user
    - the searchedColor key will hold the color associated with the searched pokemon which will be applied to update the styling of the page
    - the randomColorArray key will hold the color associated with each of the random pokemon which will be applied to update the styling of the page
    - the view property will be leverage to navigate the app, switching between "loading", "landing", and "search"
  */

  const [state, setState] = useState({
                                      randomPokemon: [],
                                      searchedPokemon: {},
                                      searchedPokemonName:"",
                                      randomColorArray: [],
                                      searchedColor: "",
                                      view: "loading"
                                    });


  /*
  Set up initial GET request for the three random pokemon that will fire when app loads
  - choose a random number between 1 and 898 which is total pokemon species and use those in the api call
  */
  useEffect(() => {
    // generate a random id that will be used to make the api call
    let randomID = [];
    for (let i = 0; i < 3; i++) {
      randomID.push(Math.floor(Math.random() * 898));
    }

    Promise.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${randomID[0]}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${randomID[1]}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${randomID[2]}`),
      
    ])
    .then((all) => {
      // build up an object with the data structure you want randomPokemon in state to have, then use that object to set the state with
      const randomPokemonArray = [];
      for (let pokemon of all) {
        randomPokemonArray.push({name: pokemon.data.name,
                                  height: pokemon.data.height,
                                  weight: pokemon.data.weight, 
                                  types: pokemon.data.types,
                                  abilities: pokemon.data.abilities,
                                  baseStats: pokemon.data.stats,
                                  sprites: pokemon.data.sprites
                                
                                  }); 
      };
      //update randomPokemon and view properties of state
      setState(prev => ({...prev, randomPokemon: randomPokemonArray, view: "landing"}));
      return randomPokemonArray;
    })
    .then((response) => {
      // make another api call this time using the names returned from the first call so that we can access the colors associated with each pokemon
      Promise.all([
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${response[0].name}`),
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${response[1].name}`),
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${response[2].name}`)

      ])
      .then((colorResponse) => {
        //update the randomColorArray property in state with the info returned
        const color1 = colorResponse[0].data.color.name;
        const color2 = colorResponse[1].data.color.name;
        const color3 = colorResponse[2].data.color.name;
        const randomColors = [color1, color2, color3];
        
        setState(prev => ({...prev, randomColorArray: randomColors}));
      })
    })
  }, []);
 
/*
This useEffect wraps the api call for when a user searches for a specific pokemon, it runs dependant on the value of searchedPokemonName updating in the state - this is triggered when the user selects a value from the list of autocomplete options in the SearchBox component */
  useEffect(() => {
    const name = state.searchedPokemonName;
    // check to see if there is a name in the searchedPokemonName property of state, without this conditional the api was calling and throwing errors as the parameters were undefined

    if(state.searchedPokemonName !== ""){
      axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      // build up an object with the various pokemon data
      const responseData = response.data;
      const searchedPokemonObj = {name: responseData.name,
                                  height: responseData.height,
                                  weight: responseData.weight, 
                                  types: responseData.types,
                                  abilities: responseData.abilities,
                                  baseStats: responseData.stats,
                                  sprites: responseData.sprites
                                  };

      // update state with values returned from api
      setState(prev => ({...prev, searchedPokemon: searchedPokemonObj}));
    })
    .then(
      // get the color associated with the specific pokemon
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
      .then(response => {
        // update state with the color returned from the api
        const color = response.data.color.name;
        setState(prev => ({...prev, searchedColor: color}));
      })
    );
    }
  
  }, [state.searchedPokemonName]);

  return {
    state, 
    setState
  };
}