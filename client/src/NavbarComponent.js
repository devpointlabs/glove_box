import React from 'react'
import { AuthConsumer, } from "./providers/AuthProvider";
import { Menu, Icon, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import Countdown from './components/Countdown';
import { Dropdown, Navbar, Nav,Container} from 'react-bootstrap'
import logo from './logo/logo_transparent.png'

class NavbarComponent extends React.Component {

  NavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <>
          <Navbar style={{backgroundColor: 'black', width: '100%'}} className="justify-content-between">
            <Navbar.Brand>
              <img
                src={logo}
                width="80"
                height="80"
                />
            </Navbar.Brand>
           
            <Nav.Link style={styles.drop} href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link style={styles.drop}href="/documents">Documents</Nav.Link>
            <Nav.Link style={styles.drop}href="/contact_us">Contact Us</Nav.Link>
            <Dropdown style={styles.drop}>
            <Dropdown.Toggle id="dropdown-basic" style={styles.drop}>
             <Icon name='user'/> Profile
            </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="1"><Link to='/addVehicle'><Icon name='add'/><strong>Add Vehicle</strong></Link></Dropdown.Item>
                <Dropdown.Item eventKey="2"><Link to='/profile'>My Information</Link></Dropdown.Item>
                <Dropdown.Item eventKey="3"><Link to='/emergency'>Emergency Checklist</Link></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4"><Link onClick={() => handleLogout(this.props.history)}>Logout</Link></Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
         
          </Navbar>


         {/* <Menu.Menu position='left' style={{backgroundColor:'black', color:'white'}}>
          <Link to='/dashboard' style={{color:'white'}}>
            <Menu.Item
              id='dashboard'
              name='dashboard'
              active={this.props.location.pathname === '/dashboard'}
            />
          </Link>
          <Link to='/documents'>
            <Menu.Item
              id='documents'
              name='documents'
              active={this.props.location.pathname === '/documents'}
            />
          </Link>
        </Menu.Menu> */}
        {/* <Menu.Menu position='right'>
          <Link to='/contact_us'>
            <Menu.Item
              id='contact us'
              name='contact us'
              active={this.props.location.pathname === '/contact_us'}
            />
          </Link>
          <Dropdown style={styles.drop}>
            <Dropdown.Toggle id="dropdown-basic" style={styles.drop}>
             <Icon name='user'/> Profile
            </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="1"><Link to='/addVehicle'><Icon name='add'/><strong>Add Vehicle</strong></Link></Dropdown.Item>
                <Dropdown.Item eventKey="2"><Link to='/profile'>My Information</Link></Dropdown.Item>
                <Dropdown.Item eventKey="3"><Link to='/emergency'>Emergency Checklist</Link></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4"><Link onClick={() => handleLogout(this.props.history)}>Logout</Link></Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu> */}
       
        </>
      )
    } else {
      return (
       
        <Navbar style={{backgroundColor: 'black', width: '100%'}} className="justify-content-between">
        <Navbar.Brand>
          <img
            src={logo}
            width="80"
            height="80"
            />
        </Navbar.Brand>
        <Nav className="justify-content-end">
        <Nav.Link style={styles.drop} href="/login">Login</Nav.Link>
        <Nav.Link style={styles.drop} href="/">Register</Nav.Link>
        <Nav.Link style={styles.drop} href="/contact_us">Contact Us</Nav.Link>
      
      </Nav>
      </Navbar>
      
        /* <Menu.Menu position='left'>
        
          <img
            src={logo}
            width="80"
            height="80"
            />
        
        </Menu.Menu>

        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
          <Link to='/contact_us'>
            <Menu.Item
              id='contact us'
              name='contact us'
              active={location.pathname === '/contact_us'}
            />
          </Link>
        </Menu.Menu> */
      )
    }
  }


  render() {
    return (
      <div>
        <Menu>
          { this.NavItems() }
        </Menu>
      </div>
    );
  };
};

const styles = { 
  drop: {
    backgroundColor:'black',
    border:'black',
    color:'white',
    // marginTop:'.1em',
    fontSize: '18px',
    padding: '20px'
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth =>
          <NavbarComponent {...this.props} auth={auth} />
        }
      </AuthConsumer>
    );
  };
};

export default withRouter(ConnectedNavbar);

