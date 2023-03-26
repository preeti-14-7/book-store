import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LogIn from './Auth/LogIn';
import Home from './Home/Home';
import { AuthProvider } from "./contexts/AuthContext"
import './App.css';
import Forget from './Auth/Forget';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom'
import React from 'react';
import SignUp from './Auth/SignUp';

function App() {
  return (
        <AuthProvider>
        <div className="App">
           <Router>
          <AuthProvider>
            <Routes >
            
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/login" element={<LogIn/>} />
              <Route path="/" element={<LogIn/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/forgot-password" element={<Forget/>} />
            </Routes >
          </AuthProvider>
        </Router>
        </div>
        </AuthProvider>
     
  );
}

export default App;
