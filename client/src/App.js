import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getCurrentUser } from "../src/context/user";
import background from '../src/assets/background-01.png';


import Navbar from './navigation/Navbar';
import Home from './static/Home';
import Login from './session/login/Login';
import Signup from './session/signup/Signup';
import Todo from './todo/Todo';


function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleCurrentUser = (user) => {
    if(user.username) {
      setCurrentUser(user);
      setLoggedIn(true);
      setLoading(false);
    }
  }

  const logoutCurrentUser = () => {
    setCurrentUser(null);
    setLoggedIn(false);
    setLoading(false);
  }

  useEffect(() => {
    getCurrentUser(handleCurrentUser)
  }, [])

  return (
    <div style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain" }} className="background">
      <div>
      <Router>
        <Navbar loggedIn={ loggedIn } logoutCurrentUser={ logoutCurrentUser } />
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/login" element={ <Login handleCurrentUser={ handleCurrentUser } /> } />
            <Route path="/signup" element={ <Signup handleCurrentUser={ handleCurrentUser } /> } />
            <Route path="/to-do" element = {<Todo />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

