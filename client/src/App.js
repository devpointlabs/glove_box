import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import FetchUser from './components/FetchUser'
import { Switch, Route, } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FetchUser>
        <Switch>
          <Register/>
          {/* <ProtectedRoute exact path='/dashboard' component={Dashboard} />
          <ProtectedRoute exact path='/documents' component={Documents} />
          <ProtectedRoute exact path='/profile' component={Profile} /> */}
          <Route exact path='/login' component={Login}/>
          {/* <Route exact path='/contact_us' component={ContactUs}/> */}
        </Switch>
      </FetchUser>
    </div>
  );
}

export default App;
