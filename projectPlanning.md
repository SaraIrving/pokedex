# Pokedex Challenge 

## Stack Choices
- React for front end
- Vanilla CSS vs SASS vs Styling library?
- Likely use something from Material UI? 
- Incorporate some animations from react-reveal??

## Project Requirements
[] 1. Pokemon API to use: https://pokeapi.co/  

[] 2. The app should be built in ReactJS. You can use a styling library like Emotion  

[] 3. The user should be able to search for a pokemon and get a “card” filled with info  about that pokemon  

[] 4. Specifically, the card should have at least the pokemon name, height, weight, type(s), abilities and base stats (hp/atk/def/special-atk/special-def/speed)  

[] 5. The card should have at least one picture/sprite of the pokemon  

[] 6. Make your styling awesome. Try to match the pokemon type with the style of the card (eg. red/green etc.). Also, try to style the pokemon stats since they are numeric  

[] 7. Have a way to show/click through all the sprites of each pokemon, instead of just showing one  

[] 8. Have the app display a few random pokemon upon loading before the user searches anything  

[] 9. Implement auto-complete options for possible pokemon matches as the user types their query (like google search)  

[] 10. Use git to keep track of your progress with good commit messages throughout development  


## Brainstorming approaches for project features 
1. Using API, pulled from API documentation examples: 
  * ask for pokemon by name using:  https://pokeapi.co/api/v2/pokemon/{id or name}

6. Styling, read more about Emotion library and decide if it is worth using
  * https://emotion.sh/docs/styled
  * Matching styling to each pokemon  
    * There is a feature of the api where we can get the main color once we know the species, so probably make a second api call after we pull that info out of the result of the first api call 
      * https://pokeapi.co/api/v2/pokemon-color/4/
    * Perhaps pass the color info the the component as a prop and then apply a classname to the elements styling? Would need to set up all possible colors in the stylesheet, either that or use inline styling? 
      * Can also investigate the styled components that are referenced in the Emotion styling library

7. Consider using a carousel feature to display images? Build from scratch or borrow from somewhere like Material UI? 
  * Medium article on DIY image slider: https://medium.com/better-programming/build-an-image-slider-with-react-es6-264368de68e4
  *  Material UI carousel package: https://www.npmjs.com/package/react-material-ui-carousel
  * Material UI slide package: https://material-ui.com/api/slide/
  * Likely need to organize sprite data into an array format
      * Will get is as an object with key value pairs, { spriteName: image }

9. Autocomplete search box
  * Check out W3 schools link for creating an autocomplete textarea
    * https://www.w3schools.com/howto/howto_js_autocomplete.asp
    * Seems to indicate that I will likely need a list of all of the names of the Pokemon???
      * Can I get this from the api somehow? 