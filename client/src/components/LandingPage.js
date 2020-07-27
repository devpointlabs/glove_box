import React from 'react'
import Background from './Images/LandingImage2.png'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const LandingPage = () => {
  const history = useHistory()
  const navigateToLogin = () => history.push('/login')
  const navigateToRegister = () => history.push('/register')

  return (
    <div style={styles.imgWrapper}>
      <img style={styles.background} src={ Background } />
      <div style={styles.buttonStyle1} >
      {/* <Button onClick={navigateToLogin}>LOGIN</Button> */}
      </div>
      <div style={styles.buttonStyle2} >
      {/* <Button onClick={navigateToRegister}>SIGN UP</Button>  */}
      {/* variant="link"  */}
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
    top: '49%',
    bottom: '50%',
    left: '0',
    right: '79%',
    textAlign: 'center',
  },
  buttonStyle2: {
    position: 'absolute',
    display: 'inlineBlock',
    top: '49%',
    bottom: '50%',
    left: '0',
    right: '50%',
    textAlign: 'center',
  },
  imgWrapper: {
    position: 'relative',
  }
}
