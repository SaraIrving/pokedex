# Pokedex App
This simplified Pokedex app allows users to search for their favorite Pokemon. It leverages the Pokemon api (pokeapi.co) and displays details and images of the Pokemon. 

## Project Requirements
  - Pokemon API to use: https://pokeapi.co/
  - The app should be built in ReactJS. You can use a styling library like Emotion
  - The user should be able to search for a pokemon and get a “card” filled with info about that pokemon
  - Specifically, the card should have at least the pokemon name, height, weight, type(s), abilities and base stats (hp/atk/def/special-atk/special-def/speed)
  - The card should have at least one picture/sprite of the pokemon
  -  Make your styling awesome. Try to match the pokemon type with the style of the card (eg. red/green etc.). Also, try to style the pokemon stats since they are numeric
  - Have a way to show/click through all the sprites of each pokemon, instead of just showing one
  - Have the app display a few random pokemon upon loading before the user searches anything
  - Implement auto-complete options for possible pokemon matches as the user types their query (like google search)
  - Use git to keep track of your progress with good commit messages throughout development

## Screenshots
### Random Pokemon Displayed To Start, Styling Of Each Card Matches The Pokemon!
!["Pokemon!"](https://raw.githubusercontent.com/SaraIrving/pokedex/master/public/images/RandomPokemon.png)

### Autocomplete Search Box
!["Find Those Pokemon!"](https://raw.githubusercontent.com/SaraIrving/pokedex/master/public/images/SearchBox.png)

### Details About Your Searched Pokemon
!["That's The One!"](https://raw.githubusercontent.com/SaraIrving/pokedex/master/public/images/SearchedPokemon.png)


## Getting Started
- Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:3000` in your browser.

## Dependencies
  - @material-ui/core: ^4.11.2
    - used for image carousel
  - @material-ui/lab: ^4.0.0-alpha.57
    - used for image carousel
  - @testing-library/jest-dom: ^5.11.4
  - @testing-library/react: ^11.1.0
  - @testing-library/user-event: ^12.1.10
  - axios: ^0.21.1
  - bootstrap: ^4.5.3
  - gh-pages: ^3.1.0
    - used for hosting
  - pokemon: ^2.0.2
    - used to get a list of all pokemon names for autocomplete search box
  - react: ^17.0.1
  - react-bootstrap: ^1.4.3
    - used for autocomplete search component
  - react-dom: ^17.0.1
  - react-reveal: ^1.2.2
    - used for animations applied to random pokemon cards
  - react-scripts: 4.0.1
  - web-vitals: ^0.2.4
