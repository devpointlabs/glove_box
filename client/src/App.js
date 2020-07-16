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
import Profile2 from './components/Profile2'
import ContactUs from './components/ContactUs';
import Documents from './components/Documents'


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
            <Route exact path='/documents' component={Documents} />
            {/* <ProtectedRoute exact path='/profile' component={Profile} />  */}
             {/*Will need to replace profile with protected route after design  */}
            <Route exact path='/profile2' component={Profile2} /> 
            <Route exact path='/login' component={Login}/>
            <Route exact path='/contact_us' component={ContactUs}/>
          </Switch>
        </Container>
      </FetchUser>
    </div>
  );
}

export default App;


