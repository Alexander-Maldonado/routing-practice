import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Choices from './components/About';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:word' element={<Choices/>}/>
        <Route path='/:word/:color/:bgCol' element={<Choices/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
