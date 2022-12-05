import { 
  BrowserRouter,
  Routes,
  Route  
} from 'react-router-dom';
import Results from '../battle/results/Results';
import NoMatch from './NoMatch';
import Popular from '../popular';
import Home from '../home/Home';
import Battle from '../battle';
import Nav from './header/Nav';
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className='container'>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='popular' element={<Popular/>}/>
          <Route path='battle' element={<Battle/>}/>
          <Route path='battle/results' element={<Results/>}/>
          <Route path='*' element={<NoMatch/>}/>       
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
