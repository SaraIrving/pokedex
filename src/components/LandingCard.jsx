import React from 'react';
import Button from './Button';
//import usePokemonData from '../hooks/usePokemonData';


export default function LandingCard(props) {

  //const {state, setState, getPokemon, clearRandom} = usePokemonData();



  return (
    <div>
      <p>This is the initial landing card with random pokemon to display</p>
      {console.log("in Landing Card, randomPokemon = ", props.state.randomPokemon)}
      {props.state.randomPokemon.map((random, index) => {
        return (
          <div>
            <p>name = {random.name}</p>
            <p>height = {random.hight}</p>
            <p>weight = {random.weight}</p>
            <p>types = {random.types.map((type, index) => {
              return (
                <p>{type.type.name}</p>
              );
            })}</p>
            <p>abilities = {random.abilities.map((ableTo, index) => {
              return (
                <p>{ableTo.ability.name}</p>
              );
            })}</p>
            <p>base stats</p>
            
          </div>
        )
      })}
      <Button buttonLabel="Click here to start your search!" onClick={() => (props.setState(prev => ({...prev, randomPokemon: [], view: "search"})))}></Button>

    </div>
    

  )


}