import React from 'react';
import Button from './Button';
import usePokemonData from '../hooks/usePokemonData';


export default function LandingCard(props) {

  const {state, setState, getPokemon} = usePokemonData();



  return (
    <div>
      <p>This is the initial landing card with random pokemon to display</p>
      <Button buttonLabel="Click here to start your search!" onClick={() => {setState(prev => ({...prev, randomPokemon:{}}))}}></Button>

    </div>
    


  )


}