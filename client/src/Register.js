import React from "react";
// import { Button, Form, Segment, Header } from "semantic-ui-react";
import { AuthConsumer } from "./providers/AuthProvider";
import {Form, Card, Button, Container, Col} from 'react-bootstrap'
import logo from './logo/logo_transparent.png'


class Register extends React.Component {
  state = {email:'', password:'', password_confirmation:'', fname:'', lname:''}

  handleSubmit = (e) => {
    e.preventDefault();
    const {auth: {handleRegister}, history} = this.props
    if (this.state.password !== this.state.password_confirmation) {
      alert("passwords don't match");
      return;
    }
    handleRegister({...this.state}, history)
  }

  handleChange= (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  render() {
    const { email, password, password_confirmation, fname, lname } = this.state;

    return (
        <div style={styles.page}>
        <img
          src={logo}
          width="200"
          height="200"
          />
        <br/>
        <h1 style={{textAlign:'left', fontSize:'50px', color:'#F7F7F7'}}>Welcome to your Digital GloveBox</h1>
        <p style={{textAlign:'left', fontSize:'25px', fontStyle: 'italic' ,color:'#F7F7F7'}}>A place for you to store all of your important vehicle records</p>
        <br/>
        <br/>
        <Container style={{maxWidth: '40%'}}>
        <Card >
          <br/>
            <Card.Body>
              <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                      <Col>
                        <Form.Group controlId="formGridfname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            autoFocus
                            required
                            type="text" 
                            placeholder="First Name" 
                            label="fname"
                            name="fname"
                            value={fname}
                            onChange={this.handleChange}
                        />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="formGridlname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Last Name" 
                            label="lname"
                            name="lname"
                            value={lname}
                            onChange={this.handleChange}
                        />
                        </Form.Group>
                        </Col>
                    </Form.Row>   
                  

                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            label="Email"
                            required
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            label="Password"
                            required
                            name="password"
                            value={password}
                            placeholder="Password"
                            type="password"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGrouppassword_confirmation">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                            label="Password Confirmation"
                            required
                            name="password_confirmation"
                            value={password_confirmation}
                            placeholder="Re-type Password"
                            type="password"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
              </Container>
            </Card.Body>
        </Card>
        </Container>
        </div>
    );
  }
}

export default class ConnectedRegister extends React.Component {
  render(){
    return(
      <AuthConsumer>
        { val=> <Register {...this.props} auth={val}  /> }

      </AuthConsumer>
    )
  }
}

const styles = {
  contain: {
      maxWidth: '60%',
      
  },
   page: {
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#F7F7F7',
      backgroundColor: '#1C2226',
      padding: '80px',
      flexDirection:'column',
   },
   centered: {
       minHeight: '86vh',
       width:'100vw',
       display: 'flex',
       justifyContent: 'center',
       alignItems:'center',
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
  },
  card: {
    border: '2px solid white',
    borderRadius: '10px',
    boxShadow: '1px 1px 6px 5px #eeeeee',
  }
}