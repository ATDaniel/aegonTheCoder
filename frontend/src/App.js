import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Links from './components/Links/Links';
import Home from './components/Home/Home';
import Setup from './components/Setup/Setup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className='App-body'>
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/about' element={ <About /> }/>
            <Route path='/links' element={ <Links /> }/>
            <Route path='/setup' element={ <Setup /> }/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
