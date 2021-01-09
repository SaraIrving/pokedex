import { useState, useEffect } from 'react';
import axios from 'axios';

export default function usePokemonData() {

  /* create a state object that contains all values and updates all values 
  - State will be an object
    - the randomPokemon key will hold data on three randomly selected pokemon which will be displayed initially
    - the searchedPokemon will hold the data on the pokemon requested by the user
    - the searchedColor key will hold the color associated with the searched pokemon which will be applied to update the styling of the page
  */

  const [state, setState] = useState({
                                      randomPokemon: {},
                                      searchedPokemon: {},
                                      searchedColor: ""

                                    });
  
  // Make GET requests to the api


}