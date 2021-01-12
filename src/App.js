import './App.css';
import Header from './components/Header';
import LandingCard from './components/LandingCard';
import Loading from './components/Loading';
import SearchView from './components/SearchView';
import usePokemonData from './hooks/usePokemonData';


function App() {
  const { state, setState } = usePokemonData();
  
  //conditionally render components based on the view in state
  
  return (
    <div className="App">
      <Header></Header>
      {console.log('state =', state.randomPokemon)}
      {console.log('random length  = ', state.randomPokemon.length)}
      {state.view === "loading" && <Loading></Loading>}
      {state.view === "landing" && <LandingCard state={state} setState={setState}></LandingCard>}
      {state.view === "search" &&  <SearchView state={state} setState={setState}></SearchView>}
      <footer></footer>
    </div>
  );
}

export default App;
