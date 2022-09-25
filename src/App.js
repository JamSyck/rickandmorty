import{Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharactersDetail from './pages/CharactersDetail';
import Locations from './pages/Locations';
import Episodes from './pages/Episodes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/characters/' element={<Characters/>}></Route>
      <Route path='/characters/:id' element={<CharactersDetail/>}></Route>
      <Route path='/locations' element={<Locations/>}></Route>
      <Route path='/episodes' element={<Episodes/>}></Route>
    </Routes>
  );
}

export default App;