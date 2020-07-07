import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
// import CarProfile from './components/CarProfile';
// import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <switch>
        <Register/>
        <Login/>
        {/* <Route exact path='/carprofile' component={CarProfile}/> */}
      </switch>
    </div>
  );
}

export default App;
