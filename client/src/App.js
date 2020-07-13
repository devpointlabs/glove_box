import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import CarProfile from './components/CarProfile';
import { Switch, Route } from 'react-router-dom';
import CarProfileForm from './components/CarProfileForm';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <switch>
        {/* <Register/>
        <Login/> */}
        <CarProfile />
        {/* <CarProfileForm /> */}
        {/* <Route exact path='/carprofile' component={CarProfile} /> */}
      </switch>
    </div>
  );
}

export default App;
