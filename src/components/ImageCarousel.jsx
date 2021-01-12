import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ImageCarousel(props) {
  //filter through sprites object and build up an object which only has the actual images, not the keys with null as a value
  const allSpritesObj = props.pokemonObj.sprites;
  const spritePics = {};

  for (let picDescription in allSpritesObj) {
    if (allSpritesObj[picDescription] !== null && picDescription !== "other" && picDescription !== "versions") {
      spritePics[picDescription] = allSpritesObj[picDescription];
    }
  };

  const spritePicsArray = Object.keys(spritePics);

  // map over the images and create an array of the Carousel.Item components that will be rendered in the Carousel component 
  const images = spritePicsArray.map((picture, index) => {
    return (
      <Carousel.Item>
        <img 
          className="d-block"
          src={spritePics[picture]}
          alt="Pokemon Image"
          key={index}
        />
      </Carousel.Item>

    );
  });

  return (
    <Carousel>
      {images}
    </Carousel>
  );
}

