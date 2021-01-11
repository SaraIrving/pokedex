import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Button from './Button';
import InfoStats from './InfoStats';
//import usePokemonData from '../hooks/usePokemonData';


export default function LandingCard(props) {

  //const {state, setState, getPokemon, clearRandom} = usePokemonData();



  return (
    <div>
      <p>This is the initial landing card with random pokemon to display</p>
      {console.log("in Landing Card, randomPokemon = ", props.state.randomPokemon)}
      {props.state.randomPokemon.map((random, index) => {
        console.log("INDEX = ", index)
        return (
          <LightSpeed>
            <InfoStats random={random} randomColor={props.state.randomColorArray[index]}></InfoStats>
          </LightSpeed>
          
        )
      })}
      <Button buttonLabel="Click here to start your search!" onClick={() => (props.setState(prev => ({...prev, randomPokemon: [], view: "search"})))}></Button>
    </div>
    

  )


}