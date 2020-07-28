import React from 'react'
import {Card, Container} from 'react-bootstrap'

function ContactUs (){
  return(
    <div style={styles.page}>
      <Container style={{maxWidth: '40%', fontFamily: 'Lato '}} >
        <br/>
        <Card  style={styles.card}>
        <Card.Header align='center' as='h1' style={{fontFamily: 'Lato ', fontWeight: 'bold' }}>Contact Us</Card.Header>
          <Card.Body>
          <div style={{fontFamily: 'Lato '}}>
            <br/>
            <h3>Developer Team</h3>
            <hr style={{width: 400}}/>
            <p>James Riches: jameseldonriches@gmail.com </p>
            <p>Ryan Ashworth: ryanashworth93@yahoo.com </p>
            <p>Maxwell Sultan: maxwellkentsultan@gmail.com </p>
            <p>Caden Biddinger: cadenbiddinger@yahoo.com</p>
            <p>Andre Leveille: andre.joe.leveille@gmail.com </p>
            <br/>
            <h4>DevPoint Labs</h4>
            <hr style={{width: 400}}/>
            <p>Address: 370 S. 300 E. Salt Lake City, UT 84111</p>
            <p>Phone: 801-448-7240</p>
            <p>Email: contact@devpointlabs.com</p>
            <br/>

          </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}
export default ContactUs

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
      padding: '100px',
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