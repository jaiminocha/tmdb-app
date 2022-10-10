import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Watchlist from './Components/Watchlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/watchlist' element={ <Watchlist /> } />
        <Route path='/contact' element= { <Contact /> } />
      </Routes>
    </Router>
  );
}

export default App;
