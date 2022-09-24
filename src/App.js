import{Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharactersDetail from './pages/CharactersDetail';
import Locations from './pages/Locations';
import LocationsDetail from './pages/LocationsDetail';
import Episodes from './pages/Episodes';
import EpisodesDetail from './pages/EpisodesDetail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/characters/' element={<Characters/>}></Route>
      <Route path='/characters/:id' element={<CharactersDetail/>}></Route>
      <Route path='/locations' element={<Locations/>}></Route>
      <Route path='/locations/:id' element={<LocationsDetail/>}></Route>
      <Route path='/episodes' element={<Episodes/>}></Route>
      <Route path='/episodes/:id' element={<EpisodesDetail/>}></Route>
    </Routes>
  );
}

export default App;