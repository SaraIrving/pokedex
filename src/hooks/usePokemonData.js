import { useState, useEffect } from 'react';
import axios from 'axios';

export default function usePokemonData(props) {

  /* create a state object that contains all values and updates all values 
  - State will be an object
    - the randomPokemon key will hold data on three randomly selected pokemon which will be displayed initially
    - the searchedPokemon will hold the data on the pokemon requested by the user
    - the searchedColor key will hold the color associated with the searched pokemon which will be applied to update the styling of the page
  */

  const [state, setState] = useState({
                                      randomPokemon: {},
                                      searchedPokemon: {faker: {}},
                                      searchedColor: "tester"

                                    });
  
  /*
  Make GET requests to the api
  - first request will search for the name of the pokemon
  - second request will use the species number gathered in the first request to determine which color we should use 
  */
  const getPokemon = function(pokeName) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) => {
      console.log(response)
    }
    )
  }



  return {
    state, 
    setState, 
    getPokemon
  }

}