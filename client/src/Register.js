import React from "react";
import { Button, Form, Segment, Header } from "semantic-ui-react";
import { AuthConsumer } from "./providers/AuthProvider";

class Register extends React.Component {
  state = {email:'', password:'', passwrodConfirmation:''}

  handleSubmit = (e) => {
    const {auth: {handleRegister}, history} = this.props
    if (this.state.password !== this.state.passwordConfirmation) {
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
    const { email, password, passwordConfirmation } = this.state;

    return (
      <Segment basic>
        <Header as="h1" textAlign="center">
          Welcome to your Digital GloveBox
        </Header>
        <Header as="p" textAlign="center">
        A place for you to store all of your important vehicle records
        </Header>
        <br/>
        <Form as='h2' onSubmit={this.handleSubmit}>
            Sign up for a free account
          <Form.Input
            label="Name"
            required
            autoFocus
            name="name"
            value={email}
            placeholder="Name"
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            required
            autoFocus
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            required
            name="password"
            value={password}
            placeholder="Password"
            type="password"
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password Confirmation"
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            placeholder="Password Confirmation"
            type="password"
            onChange={this.handleChange}
          />
          <Segment textAlign="center" basic>
            <Button primary type="submit">
              Submit
            </Button>
          </Segment>
        </Form>
      </Segment>
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

   {/* <h1>Welcome to your Digital Glovebox</h1>
        <p>A place for you to store all of your important vehicle records</p>
        <div style={styles.formDiv}>
            <form title='Register' onSubmit={this.handleSubmit} style={styles.vertForm}>
                <h2>Sign up for a free account</h2>
                <label for='name'>Name</label>
                <input type='text' label='name' name='name' value={name} onChange={this.handleChange}/>
                <label for='email'>Email</label>
                <input type='text' label='email' name='email' value={email} onChange={this.handleChange}/>
                <label for='password'>Password</label>
                <input type='text' label='password' name='password' value={password} onChange={this.handleChange}/>
                <label for='passwordConf'>Password Confirmation</label>
                <input type='text' label='passwordConfirmation' name='passwordConfirmation' value={passwordConfirmation} onChange={this.handleChange}/>
                <button style={styles.buttonStyle}>Submit</button>
            </form>
        </div>
        </> */}