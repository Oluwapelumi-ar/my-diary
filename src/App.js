
import {BrowserRouter as Router,Switch,Route,Routes} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
  
      <div className="div">
        <Header />
         <Home />
        
      </div>
      
  
    
  );
}

export default App;
