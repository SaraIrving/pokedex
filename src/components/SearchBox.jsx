import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
const pokemon = require('pokemon');


export default function SearchBox(props) {

  // get an array of all the known pokemon names to use in the autocomplete
  const pokemonOptions = pokemon.all();

  return (
    <Autocomplete
      className="searchBox"
      onChange={(event, value) => {console.log("CHANGE VALUE = ", value); props.setState(prev => ({...prev, searchedPokemonName: value.toLowerCase()}))}}
      id="searchBox"
      options={pokemonOptions}
      getOptionLabel={(option) => option}
      style={{ width: 300 }}
      disableClearable
      renderInput={(params) => {return (<TextField {...params} label="Pokemon name..." variant="outlined" />)}}
    />
  );
}

