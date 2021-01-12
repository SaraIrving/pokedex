import React from 'react';

export default function Button(props) {
 
  return (
    <button type="submit" onClick={props.onClick} >{props.buttonLabel}</button>  
  );
}