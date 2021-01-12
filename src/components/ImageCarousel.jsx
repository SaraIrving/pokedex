import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Carousel.item from 'react-bootstrap/Carousel'


export default function ImageCarousel(props) {
  //console.log("CAROUSEL props = ", props.pokemonObj.sprites)
  const allSpritesObj = props.pokemonObj.sprites;
  const spritePics = {};
  for (let picDescription in allSpritesObj) {
    if (allSpritesObj[picDescription] !== null && picDescription !== "other" && picDescription !== "versions") {
      spritePics[picDescription] = allSpritesObj[picDescription];
    }
  }

  console.log("spritePics = ", spritePics);

  const spritePicsArray = Object.keys(spritePics);

  const images = spritePicsArray.map((picture, index) => {
    return (
      <Carousel.Item>
        <img 
          style={{'height': '250px', 'margin': 'auto', 'maxWidth': '100%', backgroundColor: "black"}}
          className="d-block"
          src={spritePics[picture]}
          alt="Pokemon Image"
          key={index}
        />
      </Carousel.Item>

    )
  })

  console.log("images = ", images);
  

  return (
    <Carousel>
      {images}
      
    </Carousel>

  )
}

