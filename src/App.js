import './App.css';
import Button from './components/Button';
import LandingCard from './components/LandingCard';
import usePokemonData from './hooks/usePokemonData';


function App() {
  const {state, setState, getPokemon} = usePokemonData();

  console.log("state = ", state);
  
  // need to think about a way we can grab the input from the textarea and feed it to the getPokemon function when we click the button? probably by interacting with the DOM? 

  return (
    <div className="App">
     Welcome to the Pokedex!
     {Object.keys(state["randomPokemon"]).length !== 0 && <LandingCard></LandingCard>}
     <Button buttonLabel="Find that Pokemon!" onClick={getPokemon}></Button>
    </div>
  );
}

export default App;
