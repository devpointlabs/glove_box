import React from 'react'
import axios from 'axios'

export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

class AuthProvider extends React.Component {

  state = {user: null}

  handleRegister = (user, history) => {
    axios.post('/api/auth', user)
    .then(res => {
      this.setState({user: res.data.data})
      history.push('/')
    })
    .catch (res => {
      console.log(res)
    })
  }

  handleLogin = (user, history) => {
    axios.post('/api/auth', user)
    .then(res => {
      this.setState({user: res.data.data})
      history.push('/')
    })
    .catch (res => {
      console.log(res)
    })
  }

  handleLogout = () => {

  }

  render(){
    return(
      <AuthContext.Provider> 
      
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider