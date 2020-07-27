import React from 'react'
import Background from './Images/LandingImage2.png'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import logo from '../logo/BlackTransparent.png'

const LandingPage = () => {
  const history = useHistory()
  const navigateToLogin = () => history.push('/login')
  const navigateToRegister = () => history.push('/register')

  return (
    <div style={styles.imgWrapper}>
      <h2 style={styles.textStyle} >Get everything you need for <br/> your vehicle, in one place.</h2>
        <img style={styles.editLogo} src={logo} />
      <img style={styles.background} src={ Background } />
      <div style={styles.buttonStyle1} >
        <Button variant='dark' size='lg' onClick={navigateToLogin}>Log In</Button> 
      </div>
      <div style={styles.buttonStyle2} >
      <Button variant='dark' size='lg' onClick={navigateToRegister}>Sign Up</Button> 
      
      </div>
    </div>
  )
}

export default LandingPage;

const styles = {
  background: {
    height: 'auto',
    width: '100%',
  },
  buttonStyle1: {
    position: 'absolute',
    display: 'inlineBlock',
    top: '39%',
    bottom: '50%',
    left: '0',
    right: '70%',
    textAlign: 'center',
  },
  buttonStyle2: {
    position: 'absolute',
    display: 'inlineBlock',
    top: '39%',
    bottom: '50%',
    left: '0',
    right: '90%',
    textAlign: 'center',
  },
  imgWrapper: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  editLogo: {
    width: '20%',
    height: '30%',
    position: 'absolute',
    display: 'inlineBlock',
    top: '0',
    bottom: '0%',
    left: '0',
    right: '90%',
    textAlign: 'center',
  },
  textStyle: {
    position: 'absolute',
    display: 'inlineBlock',
    top: '30%',
    bottom: '',
    left: '0',
    right: '80%',
    textAlign: 'center',
} 
}
