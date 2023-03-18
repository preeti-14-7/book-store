import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LogIn from './Auth/LogIn';
import Home from './Home/Home';

import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
    <div className="App">
            <Routes>
              <Route exact path="/" element={<LogIn />} />
  
              <Route path="/home" element={<Home />} />
           
            </Routes>
        
      </div>
      </Router>
    </div>
  );
}

export default App;
