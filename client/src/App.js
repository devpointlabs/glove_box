import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import FetchUser from './components/FetchUser'
import { Switch, Route, } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'
import { Container } from 'semantic-ui-react';
import Dashboard from './Dashboard';
import Profile from './components/Profile'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <FetchUser>
        {/* <Register/> */}
        <Container>
          <Switch>
            <Route exact path='/' component={Register} />
            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
            {/* <ProtectedRoute exact path='/documents' component={Documents} />
            <Route exact path='/profile' component={Profile} /> */} */}
            <Route exact path='/login' component={Login}/>
            {/* <Route exact path='/contact_us' component={ContactUs}/> */}
          </Switch>
        </Container>
      </FetchUser>
    </div>
  );
}

export default App;


