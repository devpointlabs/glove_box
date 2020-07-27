import React from 'react'
import {Card, Container} from 'react-bootstrap'

function ContactUs (){
  return(
    <div style={styles.page}>
<Container >
  <br/>
  <Card style={{fontFamily: 'Lato'}} >
    <Card.Body>
    <div>
      <h1>Contact Us</h1>
      <br/>

      <h2>DevPoint Labs</h2>
      <hr style={{width: 400}}/>
      <p>Address: 370 S. 300 E. Salt Lake City, UT 84111</p>
      <p>Phone: 801-448-7240</p>
      <p>Email: contact@devpointlabs.com</p>
      <br/>


      <h3>Developer Team</h3>
      <hr style={{width: 400}}/>
      <p>James Riches: jameseldonriches@gmail.com </p>
      <p>Ryan Ashworth: ryanashworth93@yahoo.com </p>
      <p>Maxwell Sultan: maxwellkentsultan@gmail.com </p>
      <p>Caden Biddinger: cadenbiddinger@yahoo.com</p>
      <p>Andre Leveille: andre.joe.leveille@gmail.com </p>

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
      backgroundColor: '#F7F7F7',
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
  }
}