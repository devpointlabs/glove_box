import React from 'react'
import axios from 'axios'

export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

class AuthProvider extends React.Component {

  state = {user: null} // {user: {id: '1', first_name: 'bob', last_name....}}

  handleRegister = (user, history) => {
    axios.post('/api/auth', user)
    .then(res => {
      this.setState({user: res.data.data})
      history.push('/dashboard')
    })
    .catch (res => {
      console.log(res)
      alert('Invalid login attempt')
    })
  }
  
  handleLogin = (user, history) => {
    axios.post('/api/auth/sign_in', user)
    .then(res => {
      this.setState({user: res.data.data})
      history.push('/dashboard')
    })
    .catch (res => {
      console.log(res)
      debugger
    })
  }

  handleLogout = (history) => {
    axios.delete('/api/auth/sign_out')
    .then(res => {
      this.setState({ user: null})
      history.push('/login')
    })
    .catch(res => {
      console.log(res)
    })
  }

  handleUpdatePersonalInfo = (newUserData) => { //Added a new function to handle updated information
    this.setState({ user: {...this.state.user, ...newUserData}})    
  }

  render (){
    return(
      <AuthContext.Provider 
        value={{
          ...this.state,
          authenticated: this.state.user !== null,
          handleLogin: this.handleLogin,
          handleRegister: this.handleRegister,
          handleLogout: this.handleLogout,
          setUser: (user) => this.setState({user}),
          handleUpdatePersonalInfo: this.handleUpdatePersonalInfo
        }}
      >
        {this.props.children}

      </AuthContext.Provider>
    )
  }
}

export default AuthProvider
