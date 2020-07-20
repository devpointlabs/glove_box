import React from "react";
// import { Button, Form, Segment, Header } from "semantic-ui-react";
import { AuthConsumer } from "./providers/AuthProvider";
import {Form, Card, Button, Container, Col} from 'react-bootstrap'


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
        <>
        <br/>
        <h1>Welcome to your Digital GloveBox</h1>
        <p>A place for you to store all of your important vehicle records</p>
        <br/>
        <br/>
        <Container>
        <Card style ={{width: '36rem'}}>
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
        </>

    //   <Segment basic>
    //     <Header as="h1" textAlign="center">
    //       Welcome to your Digital GloveBox
    //     </Header>
    //     <Header as="p" textAlign="center">
    //     A place for you to store all of your important vehicle records
    //     </Header>
    //     <br/>
    //     <Form as='h2' onSubmit={this.handleSubmit}>
    //       <p>Sign up for a free account</p>
    //       <Form.Input
    //         label="Name"
    //         required
    //         autoFocus
    //         name="name"
    //         value={window.name}
    //         placeholder="Name"
    //         onChange={this.handleChange}
    //       />
    //       <Form.Input
    //         label="Email"
    //         required
    //         name="email"
    //         value={email}
    //         placeholder="Email"
    //         onChange={this.handleChange}
    //       />
    //       <Form.Input
    //         label="Password"
    //         required
    //         name="password"
    //         value={password}
    //         placeholder="Password"
    //         type="password"
    //         onChange={this.handleChange}
    //       />
    //       <Form.Input
    //         label="Password Confirmation"
    //         required
    //         name="passwordConfirmation"
    //         value={passwordConfirmation}
    //         placeholder="Password Confirmation"
    //         type="password"
    //         onChange={this.handleChange}
    //       />
    //       <Segment textAlign="center" basic>
    //         <Button primary type="submit">
    //           Submit
    //         </Button>
    //       </Segment>
    //     </Form>
    //   </Segment>



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