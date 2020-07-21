import React from 'react'
import { AuthConsumer, } from "./providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {

  NavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <>
         <Menu.Menu position='left'>
          <Link to='/dashboard'>
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
        </Menu.Menu>
        <Menu.Menu position='right'>
         <Link to='/profile'>
            <Menu.Item
              id='profile'
              name='profile'
              active={this.props.location.pathname === '/profile'}
            />
          </Link>
          <Link to='/contact_us'>
            <Menu.Item
              id='contact us'
              name='contact us'
              active={this.props.location.pathname === '/contact_us'}
            />
          </Link>
          <Menu.Item
            name='logout'
            onClick={() => handleLogout(this.props.history)}
          />
        </Menu.Menu>
       
        </>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/'>
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
          {/* TO BE DELETED */}
          <Link to='/ProfileForm'>
            <Menu.Item
              id='ProfileForm'
              name='ProfileForm'
              active={location.pathname === '/ProfileForm'}
            />
          </Link>
          {/* TO BE DELETED */}
        </Menu.Menu>
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

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    );
  };
};

export default withRouter(ConnectedNavbar);