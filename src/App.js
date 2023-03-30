import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LogIn from './Auth/LogIn';
import Home from './Home/Home';
import { AuthProvider } from "./contexts/AuthContext"
import './App.css';
import Forget from './Auth/Forget';
import PrivateRoute from './Auth/PrivateRoute';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom'
import React from 'react';
import SignUp from './Auth/SignUp';
import Read from './Home/Read'

function App() {
  return (
        <AuthProvider>
        <div className="App">
           <Router>
          <AuthProvider>
            <Routes >
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/read" element={<Read/>} />
              <Route path="/" element={<LogIn/>} />
              <Route path="/home" element={ <PrivateRoute> <Home /></PrivateRoute>}/>
              <Route path="/forgot-password" element={<Forget/>} />
            </Routes >
          </AuthProvider>
        </Router>
        </div>
        </AuthProvider>
     
  );
}

export default App;
