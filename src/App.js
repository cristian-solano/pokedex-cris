import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProtectedPages from './Pages/ProtectedPages';
import Login from './Pages/Login';
import PokemonList from './Pages/PokemonList';
import Pokemon from './Pages/Pokemon';

function App() {
  return (
    <div className="App">
      <header className="">
       <Routes>
         <Route path='/' element={<Login/>} />
         <Route element={<ProtectedPages />}>
            <Route path='/pokedex' element={<PokemonList />}/>
            <Route path='/pokedex/:id' element={<Pokemon />}/>
            <Route path='/pokedex/:id/encounters'/>
         </Route>
         <Route path='/pokedex/settings'/>

       </Routes>
      </header>
    </div>
  );
}

export default App;
