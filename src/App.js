import './App.css';
import Button from './components/Button';
import LandingCard from './components/LandingCard';
import Loading from './components/Loading';
import SearchView from './components/SearchView';
import usePokemonData from './hooks/usePokemonData';


function App() {
  const {state, setState, getPokemon} = usePokemonData();

  console.log("state = ", state);
  
  // need to think about a way we can grab the input from the textarea and feed it to the getPokemon function when we click the button? probably by interacting with the DOM? 

  return (
    <div className="App">
     Welcome to the Pokedex!
     {console.log('state =', state.randomPokemon)}
     {console.log('random length  = ', state.randomPokemon.length)}
     {state.view === "loading" && <Loading></Loading>}
     {state.view === "landing" && <LandingCard state={state} setState={setState}></LandingCard>}
     {state.view === "search" &&  <SearchView state={state} onClick={getPokemon}></SearchView>}
    
    </div>
  );
}

export default App;
