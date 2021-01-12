import React from 'react';
import SearchBox from './SearchBox';
import InfoStats from './InfoStats';

export default function SearchView (props) {

  return (
    <div className="searchedPokemonWrapper">
      <SearchBox state={props.state} setState={props.setState}></SearchBox>
      {props.state.searchedPokemon.name && <InfoStats pokemon={props.state.searchedPokemon} color={props.state.searchedColor} state={props.state}></InfoStats>}
    </div>
  )



}