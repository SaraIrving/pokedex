import React from 'react';
import ImageCarousel from './ImageCarousel';


export default function InfoStats(props) {
  console.log("INFOSTATS props = ", props)
  const style = {
                  borderWidth: "10px",
                  borderStyle: "solid",
                  borderColor: props.color,
                  borderRadius: '10px'
                };

  return (
    <div style={style} className="InfoStatsWrapper">
      <ImageCarousel pokemonObj={props.pokemon}></ImageCarousel>
      <div className="InfoWrapper" >
        <div>
          <h6>Basic Info</h6>
          <p>name = {props.pokemon.name}</p>
          <p>height = {props.pokemon.height}</p>
          <p>weight = {props.pokemon.weight}</p>
          <p>types = {props.pokemon.types.map((type, index) => {
            return (
              <span key={index}>{type.type.name} </span>
            );
          })}</p>
          <p>abilities = {props.pokemon.abilities.map((ableTo, index) => {
            return (
              <span key={index}>{ableTo.ability.name} </span>
            );
          })}</p>
        </div>
        <div>
          <h6>Base Stats</h6>
          <p>hp: {props.pokemon.baseStats[0].base_stat}</p>
          <p>attack: {props.pokemon.baseStats[1].base_stat}</p>
          <p>defense: {props.pokemon.baseStats[2].base_stat}</p>
          <p>special-attack: {props.pokemon.baseStats[3].base_stat}</p>
          <p>special-defense: {props.pokemon.baseStats[4].base_stat}</p>
          <p>speed: {props.pokemon.baseStats[5].base_stat}</p>
        </div>
      </div>
      
    </div>
  )


}

