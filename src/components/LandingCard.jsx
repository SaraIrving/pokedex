import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Button from './Button';
import InfoStats from './InfoStats';
//import usePokemonData from '../hooks/usePokemonData';


export default function LandingCard(props) {

  //const {state, setState, getPokemon, clearRandom} = usePokemonData();



  return (
    <div>
      <p>Want to find your favorite pokemon? Click the button below to start your search!</p>
      {/* {console.log("in Landing Card, randomPokemon = ", props.state.randomPokemon)} */}
      <Button buttonLabel="Click here to start your search!" onClick={() => (props.setState(prev => ({...prev, randomPokemon: [], view: "search"})))}></Button>
      <ul className="randomPokemonList">
        {props.state.randomPokemon.map((random, index) => {
      
          return (
            <li className="randomListItem">
              <LightSpeed key={index}>
                <InfoStats pokemon={random} color={props.state.randomColorArray[index]} key={index}></InfoStats>
              </LightSpeed>
            </li>
            )
          })}

      </ul>
    </div>
    

  )


}