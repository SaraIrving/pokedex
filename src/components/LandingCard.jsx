import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Button from './Button';
import InfoStats from './InfoStats';

//This component will be displayed once the app loads and will hold the three randomly selected pokemon cards
export default function LandingCard(props) {

  return (
    <div className="landingView">
      <div className="landingText">
        <p>Want to find your favorite pokemon?</p>
        <p>Click the button below to start your search!</p>
      </div>
      
      <Button buttonLabel="Click here to start your search!" onClick={() => (props.setState(prev => ({...prev, randomPokemon: [], view: "search"})))}></Button>
      <ul className="randomPokemonList">
        {props.state.randomPokemon.map((random, index) => {
      
          return (
            <li className="randomListItem">
              <LightSpeed key={index}>
                <InfoStats pokemon={random} color={props.state.randomColorArray[index]} key={index} state={props.state}></InfoStats>
              </LightSpeed>
            </li>
            )
          })}
      </ul>
    </div>
  );
}