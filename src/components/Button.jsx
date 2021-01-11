import React from 'react';


export default function Button(props) {
  //console.log("BUTTON props = ", props)
  return (
    <button type="submit" onClick={props.onClick} >{props.buttonLabel}</button>  
  )

};