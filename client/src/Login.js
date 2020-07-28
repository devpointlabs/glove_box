import React from "react";
import { AuthConsumer } from "./providers/AuthProvider";
// import { Form, Segment, Header, Container } from "semantic-ui-react";
import { Card, Button, Container, Form} from 'react-bootstrap'
import logo from './logo/logo_transparent.png'

class Login extends React.Component {
  state = { email: "", password: "" };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.auth.handleLogin({ ...this.state }, this.props.history);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (

      <div style={styles.page}>
       
        <Container style={{maxWidth: '40%', fontFamily: 'Lato '}}>
        <img
          src={logo}
          width="200"
          height="200"
        />
          <br/>
          <br/>
          <br/>
        <Card >
          <Card.Body>
            <h1 style={{textAlign: 'left'}}>Login</h1>
            <br/>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formGridemail">
                <Form.Control 
                  autoFocus
                  required
                  type="text" 
                  placeholder="Email" 
                  label="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
              />
              </Form.Group>
              <br/>
                <Form.Control 
                  required
                  type="text" 
                  placeholder="Password" 
                  label="password"
                  name="password"
                  value={password}
                  type="password"
                  onChange={this.handleChange}
              />
              <br/>
              <Button style={styles.buttonStyle} type="submit" >
              Log in
            </Button>
            </Form>
            <br/>
            
          </Card.Body>
        </Card>
      
        </Container>
    </div>


      // <Container>
      // <Segment basic>
      //   <Header as="h1" textAlign="center">
      //     Login
      //   </Header>
      //   <Form onSubmit={this.handleSubmit}>
      //     <Form.Input
      //       label="Email"
      //       autoFocus
      //       required
      //       name="email"
      //       value={email}
      //       placeholder="Email"
      //       onChange={this.handleChange}
      //     />
      //     <Form.Input
      //       label="Password"
      //       required
      //       name="password"
      //       value={password}
      //       placeholder="Password"
      //       type="password"
      //       onChange={this.handleChange}
      //     />
      //     <Segment textAlign="center" basic>
      //       <Button style={styles.buttonStyle} type="submit">
      //         Sign in
      //       </Button>
      //     </Segment>
      //   </Form>
      // </Segment>
      // </Container>
    );
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {(auth) => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

const styles = {
    vertForm: {
        display: 'flex',
        flexDirection: 'column',
        // maxWidth:'70%',
    },
    formDiv: {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        justifyContent:'center'
    },
    buttonStyle: {
      all: 'unset',
      maxWidth: '70%',
      padding: '10px 25px',
      color: 'white',
      backgroundColor: 'black',
      borderRadius: '5px',
      marginLeft: 'auto',
      marginRight: 'auto',
      whiteSpace: 'nowrap',
      fontFamily: 'Lato ',
      cursor: 'pointer',
    },
    card: {
      maxWidth: '50%',
      display: 'flex',
      justifyContent:'center',
      fontFamily: 'Lato ',
      alignItems: 'center',
    },
    page: {
      // width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#F7F7F7',
      backgroundColor: '#1C2226',
      padding: '100px',
      // flexDirection:'column',
   },

}