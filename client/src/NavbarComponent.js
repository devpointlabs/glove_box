// import React from 'react'
// import { AuthConsumer, } from "./providers/AuthProvider";
// import { Menu, Icon, } from 'semantic-ui-react'
// import { Link, withRouter, } from 'react-router-dom'
// import { Dropdown, Navbar, Nav,} from 'react-bootstrap'
// import logo from './logo/logo_transparent.png'
// import BlackTransparent from './logo/BlackTransparent.png'

// class NavbarComponent extends React.Component {

//   NavItems = () => {
//     const { auth: { user, handleLogout, }, location, } = this.props;

//     if (user) {
//       return (
//         <>
//           <Navbar style={{backgroundColor: 'black',backgroundImage:'linear-gradient(to top left, black, gray)', width: '100%', }} className="justify-content-between">
//             <Navbar.Brand>
//               <img
//                 src={logo}
//                 width="80"
//                 height="80"
//                 />
//             </Navbar.Brand>
           
//             <Nav.Link style={styles.link} href="/dashboard">Dashboard</Nav.Link>
//             <Nav.Link style={styles.link}href="/documents">Documents</Nav.Link>
//             <Nav.Link style={styles.link}href="/contact_us">Contact Us</Nav.Link>
//             <Dropdown >
//             <Dropdown.Toggle id="dropdown-basic" style={styles.link}>
//              <Icon name='user'/> Profile
//             </Dropdown.Toggle>
//               <Dropdown.Menu >
//                 <Dropdown.Item eventKey="1"><Link to='/addVehicle'style={styles.drop} ><Icon name='add'/><strong>Add Vehicle</strong></Link></Dropdown.Item>
//                 <Dropdown.Item eventKey="2"><Link  to='/profile' style={styles.drop} >My Information</Link></Dropdown.Item>
//                 <Dropdown.Item eventKey="3"><Link to='/emergency' style={styles.drop} >Emergency Checklist</Link></Dropdown.Item>
//                 <Dropdown.Divider />
//                 <Dropdown.Item eventKey="4"><Link onClick={() => handleLogout(this.props.history)} style={styles.drop} >Logout</Link></Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//             <Navbar.Brand>
//               <img
//                 src={logo}
//                 width="80"
//                 height="80"
//                 />
//             </Navbar.Brand>
//           </Navbar>
//         </>
//       )
//     } else {
//       return (
       
//         <Navbar style={{backgroundColor: 'black', width: '100%', border: 'black'}} className="justify-content-between">
//         <Navbar.Brand>
//           <img
//             src={logo}
//             width="80"
//             height="80"
//             />
//         </Navbar.Brand>
//         <Nav className="justify-content-end">
//         <Nav.Link style={styles.link} href="/login">Login</Nav.Link>
//         <Nav.Link style={styles.link} href="/">Register</Nav.Link>
//         <Nav.Link style={styles.link} href="/contact_us">Contact Us</Nav.Link>
      
//       </Nav>
//       </Navbar>
//       )
//     }
//   }


//   render() {
//     return (
//       <div>
//         <Menu>
//           { this.NavItems() }
//         </Menu>
//       </div>
//     );
//   };
// };

// const styles = { 
//   link: {
//     background:'none',
//     border:'black',
//     color:'white',
//     fontSize: '18px',
//     // padding: '20px',
//     fontFamily: 'Lato',
//   },
//   drop: {
//     color: 'black',
//     fontFamily: 'Lato',
//   }
// }

// export class ConnectedNavbar extends React.Component {
//   render() {
//     return (
//       <AuthConsumer>
//         { auth =>
//           <NavbarComponent {...this.props} auth={auth} />
//         }
//       </AuthConsumer>
//     );
//   };
// };

// export default withRouter(ConnectedNavbar);

import React from "react";
import { AuthConsumer } from "./providers/AuthProvider";
import { Menu, Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { Dropdown, Navbar, Nav } from "react-bootstrap";
import logo from "./logo/logo_transparent.png";

class NavbarComponent extends React.Component {
  NavItems = () => {
    const {
      auth: { user, handleLogout },
      location,
    } = this.props;
    if (user) {
      return (
        <>
          <Navbar
            style={{
              backgroundColor: "black",
              backgroundImage: "linear-gradient(to top left, black, gray)",
              width: "100%",
            }}
            className="justify-content-between"
          >
            <Navbar.Brand>
              <img src={logo} width="80" height="80" />
            </Navbar.Brand>
            {/* <Nav.Link style={styles.link} eventKey="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link style={styles.link} eventKey="/documents">
              Documents
            </Nav.Link>
            <Nav.Link style={styles.link} eventKey="/contact_us">
              Contact Us
            </Nav.Link> */}
            <Link style={styles.link} to="/dashboard">
              {" "}
              Dashboard
            </Link>
            <Link style={styles.link} to="/documents">
              {" "}
              Documents
            </Link>
            <Link style={styles.link} to="/contact_us">
              {" "}
              Contact Us
            </Link>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" style={styles.link}>
                <Icon name="user" /> Profile
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="1">
                  <Link to="/addVehicle" style={styles.drop}>
                    <Icon name="add" />
                    <strong>Add Vehicle</strong>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                  <Link to="/profile" style={styles.drop}>
                    My Information
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="3">
                  <Link to="/emergency" style={styles.drop}>
                    Emergency Checklist
                  </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">
                  <Link
                    onClick={() => handleLogout(this.props.history)}
                    style={styles.drop}
                  >
                    Logout
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Navbar.Brand>
              <img src={logo} width="80" height="80" />
            </Navbar.Brand>
          </Navbar>
        </>
      );
    } else {
      return (
        <Navbar
          style={{ backgroundColor: "black", width: "100%", border: "black" }}
          className="justify-content-between"
        >
          <Navbar.Brand>
            <img src={logo} width="80" height="80" />
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Link style={styles.link} to="/login">
              {" "}
              Loginz
            </Link>
            <Link style={styles.link} to="/">
              {" "}
              Registerz
            </Link>
            <Link style={styles.link} to="/contact_us">
              {" "}
              Contact Usz
            </Link>
            {/* <Nav.Link style={styles.link} href="/login">
              Login
            </Nav.Link> */}
            {/* <Nav.Link style={styles.link} href="/"> */}
            {/* Register
            </Nav.Link>
            <Nav.Link style={styles.link} href="/contact_us">
              Contact Us
            </Nav.Link> */}
          </Nav>
        </Navbar>
      );
    }
  };
  render() {
    return (
      <div>
        <Menu>{this.NavItems()}</Menu>
      </div>
    );
  }
}
const styles = {
  link: {
    background: "none",
    border: "black",
    color: "white",
    fontSize: "18px",
    // padding: '20px',
    fontFamily: "Lato",
  },
  drop: {
    color: "black",
    fontFamily: "Lato",
  },
};
export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {(auth) => <NavbarComponent {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}
export default withRouter(ConnectedNavbar);