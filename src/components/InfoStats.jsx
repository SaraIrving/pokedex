import React from 'react';
import ImageCarousel from './ImageCarousel';


export default function InfoStats(props) {
  //create a customColor variable that will be the color associated with each pokemon which will be used in the inline styling of the border and the span tags, make sure text does not end up black or it will be lost in the background

  let customColor;
  if(props.color === "black") {
    customColor = "white";
  } else {
    customColor = props.color;
  }

  const style = {
                  borderWidth: "10px",
                  borderStyle: "solid",
                  borderColor: customColor,
                  borderRadius: '10px'
                };

  const spanStyle= {
                    color: customColor
                  };
  
  // apply className conditionally to the main div to reflect the changes we want in teh card styling depending on the current view
  let conditionalClassname;
  if(props.state.view === "landing"){
    conditionalClassname = "InfoStatsWrapper";
  } else if (props.state.view === "search") {
    conditionalClassname = "searchedPokemon"
  }

  return (
    <div style={style} className={conditionalClassname}>
      <ImageCarousel pokemonObj={props.pokemon}></ImageCarousel>
      <div className="InfoWrapper" >
        <div>
          <h6>Basic Info</h6>
          <p>name = <span style={spanStyle}>{props.pokemon.name}</span></p>
          <p>height = <span style={spanStyle}>{props.pokemon.height}</span></p>
          <p>weight = <span style={spanStyle}>{props.pokemon.weight}</span></p>
          <p>types = <span style={spanStyle}>{props.pokemon.types.map((type, index) => {
            return (
              <span key={index}>{type.type.name} </span>
            );
          })}</span></p>
          <p>abilities = <span style={spanStyle}>{props.pokemon.abilities.map((ableTo, index) => {
            return (
              <span key={index}>{ableTo.ability.name} </span>
            );
          })}</span></p>
        </div>
        <div>
          <h6>Base Stats</h6>
          <p>hp: <span style={spanStyle}>{props.pokemon.baseStats[0].base_stat}</span></p>
          <p>attack: <span style={spanStyle}>{props.pokemon.baseStats[1].base_stat}</span></p>
          <p>defense: <span style={spanStyle}>{props.pokemon.baseStats[2].base_stat}</span></p>
          <p>special-attack: <span style={spanStyle}>{props.pokemon.baseStats[3].base_stat}</span></p>
          <p>special-defense: <span style={spanStyle}>{props.pokemon.baseStats[4].base_stat}</span></p>
          <p>speed: <span style={spanStyle}>{props.pokemon.baseStats[5].base_stat}</span></p>
        </div>
      </div>
    </div>
  );
}

