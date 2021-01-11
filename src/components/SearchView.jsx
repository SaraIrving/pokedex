import React from 'react';
import Button from './Button';
import SearchBox from './SearchBox';

export default function SearchView (props) {
  //console.log("SEARCH props = ", props)

  return (
    <div>
      <SearchBox></SearchBox>
      <Button buttonLabel="Find that Pokemon!" onClick={props.onClick}></Button>
      <p>{props.state.searchedPokemon.name}</p>
    </div>
  )



}