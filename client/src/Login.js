import React from "react";
import { AuthConsumer } from "./providers/AuthProvider";
import { Button, Form, Segment, Header, Container } from "semantic-ui-react";

class Login extends React.Component {
  state = { email: "glynda@thiel-harber.com", password: "123123123" };
  // added a email and password..delete when done

  handleSubmit = (e) => {
    this.props.auth.handleLogin({ ...this.state }, this.props.history);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
      <Segment basic>
        <Header as="h1" textAlign="center">
          Login
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Email"
            autoFocus
            required
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
          <Segment textAlign="center" basic>
            <Button primary type="submit">
              Sign in
            </Button>
          </Segment>
        </Form>
      </Segment>
      </Container>
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
        maxWidth: '50%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'10px',
    }
}

// import React, {useState} from 'react'

// export default function Login() {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log('submit',{ email, password })
//        //TODO: add axios call to devise method we dont have yet
//     }
    
//     return (
//         <div style={styles.formDiv}>
//         <form title='Register' onSubmit={handleSubmit} style={styles.vertForm}>
//             <h1>Register</h1>
//             <label for='email'>Email</label>
//             <input type='text' label='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
//             <label for='password'>Password</label>
//             <input type='text' label='password' name='password' value={password} onChange={(e)=> setPassword(e.target.value) }/>
//             <button style={styles.buttonStyle}>Submit</button>
//         </form>
//     </div>
//     )
// }

// const styles = {
//     vertForm: {
//         display: 'flex',
//         flexDirection: 'column',
//         // maxWidth:'70%',
//     },
//     formDiv: {
//         display: 'flex',
//         justifyContent:'center',
//         alignItems: 'center',
//         justifyContent:'center'
//     },
//     buttonStyle: {
//         maxWidth: '50%',
//         marginLeft:'auto',
//         marginRight:'auto',
//         marginTop:'10px',
//     }
// }
