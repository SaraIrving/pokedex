import React from 'react';


export default function InfoStats(props) {
  console.log("INFOSTATS props = ", props)
  const style = {
                  borderWidth: "5px",
                  borderStyle: "solid",
                  borderColor: props.randomColor
                };

  return (
    <div style={style} className="InfoStatsWrapper">
      <div className="InfoStatsWrapper">
        <div>
          <h3>Basic Info</h3>
          <p>name = {props.random.name}</p>
          <p>height = {props.random.height}</p>
          <p>weight = {props.random.weight}</p>
          <p>types = {props.random.types.map((type, index) => {
            return (
              <span key={index}>{type.type.name} </span>
            );
          })}</p>
          <p>abilities = {props.random.abilities.map((ableTo, index) => {
            return (
              <span key={index}>{ableTo.ability.name} </span>
            );
          })}</p>
        </div>
        <div>
          <h3>Base Stats</h3>
          <p>hp: {props.random.baseStats[0].base_stat}</p>
          <p>attack: {props.random.baseStats[1].base_stat}</p>
          <p>defense: {props.random.baseStats[2].base_stat}</p>
          <p>special-attack: {props.random.baseStats[3].base_stat}</p>
          <p>special-defense: {props.random.baseStats[4].base_stat}</p>
          <p>speed: {props.random.baseStats[5].base_stat}</p>
        </div>
      </div>
      
    </div>
  )


}

