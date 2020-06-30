import React from 'react'
import axios from 'axios'

export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

class AuthProvider extends React.Component {

  state = {user: null}

  handleRegister = () => {

  }

  handleLogin = () => {

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