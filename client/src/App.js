import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'
import { Container } from 'semantic-ui-react';
import Dashboard from './Dashboard';
import ProfileForm from './components/ProfileForm'
import ContactUs from './components/ContactUs';
import Documents from './components/Documents'
import Footer from './components/Footer';
import CarProfile from './components/CarProfile'

function App() {
  return (
    <div className="App">
      <FetchUser>
        <Navbar/>
        <div style={{minHeight:'86vh'}}>
        <Switch >
            <Route exact path='/' component={Register} />
            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
            <Route exact path='/documents' component={Documents} />
            <Route exact path='/CarProfile' component={CarProfile} />
            {/* <ProtectedRoute exact path='/profile' component={Profile} />  */}
             {/*Will need to replace profile with protected route after design  */}
            <Route exact path='/ProfileForm' component={ProfileForm} /> 
            <Route exact path='/login' component={Login}/>
            <Route exact path='/contact_us' component={ContactUs}/>
        </Switch>
        </div>
        <Footer/>   
      </FetchUser>
    </div>
  );
}

export default App;
