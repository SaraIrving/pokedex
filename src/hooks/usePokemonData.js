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
  Set up initial GET request for the random pokemon data that will fire when app loads
  - get this request to run on initial render by wrapping in useEffect?
  - probably as soon as they click the search button we should delete this data so that it can be rendered conditionally based on it's presence? 
  - choose a random number between 1 and 898 which is total pokemon species and use those in the api call? 
  */
  

  useEffect(() => {

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
      // update randomPokemon key of state with this infomation
      console.log('all = ', all);
      console.log('all[0].data = ', all[0].data);
      setState(prev => ({...prev, randomPokemon: {id: all[0].data.id}}))

      randomID = [];
      //state.randomPokemon[all[0].data.name] = {id: all[0].data.id}
      //console.log("state after random api call = ", state)
    })

  }, [])
 


  
  /*
  Make GET requests to the api
  - first request will search for the name of the pokemon
  - second request will use the species number gathered in the first request to determine which color we should use 
  */
  const getPokemon = function() {
    console.log("inside getPokemon")
    const pokeName = "charmander"
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) => {
      // wipe randomPokemon state so it will no longer be rendered
      
      //update searchedPokemon key of state with this information
      console.log('response in getPokemon function = ', response)
      setState(prev => ({...prev, randomPokemon: {}, searchedPokemon: {name: response.data.name}}))
    })
  }

  const clearRandom = function() {
    console.log("clearRandom func running!")
    console.log("state before the update = ", state.randomPokemon)
    setState(prev => ({...prev, randomPokemon: {}}));

  }


  return {
    state, 
    setState, 
    getPokemon,
    clearRandom
  }

}