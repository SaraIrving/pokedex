import React from 'react';
import Button from './Button';

export default function SearchView (props) {
  console.log("SEARCH props = ", props)

  return (
    <div>
      <p>{props.state.searchedPokemon.name}</p>
      <Button buttonLabel="Find that Pokemon!" onClick={props.onClick}></Button>
    </div>
  )



}