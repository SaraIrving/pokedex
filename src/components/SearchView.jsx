import React from 'react';
import SearchBox from './SearchBox';
import InfoStats from './InfoStats';

//This component is rendered when the user clicks the button to start their pokemon search, it will hold the search box and once they have searched it will display the pokemon card

export default function SearchView (props) {
  return (
    <div className="searchedPokemonWrapper">
      <SearchBox state={props.state} setState={props.setState}></SearchBox>
      {props.state.searchedPokemon.name && <InfoStats pokemon={props.state.searchedPokemon} color={props.state.searchedColor} state={props.state}></InfoStats>}
    </div>
  );
}