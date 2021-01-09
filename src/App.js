import './App.css';
import Button from './components/Button';
import usePokemonData from './hooks/usePokemonData';

function App() {
  const {state, setState, getPokemon} = usePokemonData();

  console.log("state = ", state);
  
  // need to think about a way we can grab the input from the textarea and feed it to the getPokemon function when we click the button? probably by interacting with the DOM? 

  return (
    <div className="App">
     Welcome to the Pokedex!
     {state.randomPokemon !== {} && <p>There is random pokemon in the state!</p>}
     <Button buttonLabel="Find that Pokemon!" onClick={getPokemon}></Button>
    </div>
  );
}

export default App;
