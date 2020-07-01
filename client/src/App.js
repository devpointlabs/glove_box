import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <switch>
        <Register/>
        <Login/>
      </switch>
    </div>
  );
}

export default App;
