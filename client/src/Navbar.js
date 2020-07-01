import React from 'react'
import { AuthConsumer, } from "./providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={() => handleLogout(this.props.history)}
          />
          <Link to='/contact_us'>
            <Menu.Item
              id='contact us'
              name='contact us'
              active={location.pathname === '/contact_us'}
            />
          </Link>
        </Menu.Menu>
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
          {/* <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link> */}
          <Link to='/contact_us'>
            <Menu.Item
              id='contact us'
              name='contact us'
              active={location.pathname === '/contact_us'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='dashboard'
              id='dashboard'
              active={this.props.location.pathname === '/'}
            />
          </Link>
          <Link to='/documents'>
            <Menu.Item
              name='documents'
              id='documents'
              active={this.props.location.pathname === '/documents'}
            />
          </Link>
          <Link to='/profile'>
            <Menu.Item
              name='profile'
              id='profile'
              active={this.props.location.pathname === '/profile'}
            />
          </Link>
          { this.rightNavItems() }
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