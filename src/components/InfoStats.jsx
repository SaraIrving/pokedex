import React from 'react';


export default function InfoStats(props) {
  console.log("INFOSTATS props = ", props)
  const style = {
                  borderWidth: "5px",
                  borderStyle: "solid",
                  borderColor: props.color
                };

  return (
    <div style={style} className="InfoStatsWrapper">
      <div className="InfoStatsWrapper">
        <div>
          <h3>Basic Info</h3>
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
          <h3>Base Stats</h3>
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

