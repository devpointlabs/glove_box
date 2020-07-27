import React from 'react';
import './App.css';
import NavbarComponent from './NavbarComponent';
import Register from './Register';
import Login from './Login';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'
import { Container } from 'semantic-ui-react';
import Dashboard from './components/Dashboard';
import ProfileForm from './components/ProfileForm'
import ContactUs from './components/ContactUs';
import Documents from './components/Documents'
import Footer from './components/Footer';
import Profile from './components/Profile'
import Premium from './components/Premium';
import ThankYouAddVehicle from './components/ThankYouAddVehicle';
import AddVehicleForm from './components/AddVehicleForm';
import Emergency from './components/Emergency';

function App() {
  return (
    <div className="App">
      <FetchUser>
        <NavbarComponent/>
        <div style={{minHeight:'86vh'}}>
        <Switch >
            <Route exact path='/' component={Register} />
            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
            <ProtectedRoute exact path='/addVehicle' component={AddVehicleForm} />
            <ProtectedRoute exact path='/emergency' component={Emergency} />
            <Route exact path='/documents' component={Documents} />
            <Route exact path='/profile' component={ProfileForm} /> 
            <Route exact path='/login' component={Login}/>
            <Route exact path='/contact_us' component={ContactUs}/>
            <Route exact path='/premium' component={Premium}/>
            <ProtectedRoute exact path='/ThankYou' component={ThankYouAddVehicle}/>

        </Switch>
        </div>
        <Footer/>   
      </FetchUser>
    </div>
  );
}

export default App;
