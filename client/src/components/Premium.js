import React from 'react'
import { Button, Form, Container,Card} from "react-bootstrap"
import useWindowSize from '../hooks/useWindowSize'


function Premium (){

  const [windowWidth, ,bps] = useWindowSize()

  const actualWidthSize = windowWidth > bps.md ? '40%' : '90%'

  return(
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '30px',
      marginBottom: '30px',
    }}>
    <div style={{
      width: actualWidthSize,
      maxWidth: actualWidthSize,
      border: 'solid black 1px',
      padding: '20px',
    }}>
      <Container>
      <Form style= {{alignContent: 'left'}}>
        <div style={{display: 'flex', justifyContent: 'start', marginBottom: '30px'}}>
          <h1><b>Sign up for a Premium subscription</b></h1>
          <hr />
        </div>
        <div style={{display: 'flex', justifyContent: 'start'}}>
          <h3>Enter your billing information</h3>
        </div>
        <hr />
        <Form.Row>
          <div style={{
            width: '50%',
            paddingRight: '5px'
          }}>
            <div style={{display: 'flex', justifyContent: 'start'}}>
              <label>First Name</label>
            </div>
            <Form.Control
              placeholder="First Name"
              name="first name"
              required
              
              />
          </div>
          <div style={{
            width: '50%',
            paddingLeft: '5px'
          }}>
            <div style={{display: 'flex', justifyContent: 'start'}}>
              <label>Last Name</label>
            </div>
            <Form.Control
              placeholder="Last Name"
              name="last name"
              required
              
              />
          </div>
        </Form.Row>
        <br />
        
        <br />
        <Form.Row>
          <div style={{
            width: '50%',
            paddingLeft: '5px'
          }}>
            <label style={{display: 'flex', justifyContent: 'start'}}>Credit or Debit Card</label>
            <Form.Control
              placeholder="Card Number  MM/YY  CVC"
              name="Card Number"
            />
          </div>
        </Form.Row>
        <br />
        
        <Form.Row>
          <div style={{
            width: '50%',
            paddingLeft: '5px'
          }}>
            <div style={{display: 'flex', justifyContent: 'start'}}>
              <label>Country</label>
            </div>
            <Form.Control
              placeholder="Country"
              name="Country"
            />
          </div>
          <br />
          <div style={{
            width: '50%',
            paddingLeft: '5px'
          }}>
            <div style={{display: 'flex', justifyContent: 'start'}}>
              <label>ZIP/Postal Code</label>
            </div>
            <Form.Control
              placeholder="zip"
              name="zip"
            />
          </div>
        </Form.Row>
       
        <br />
        
          <p style={{fontSize: '13px'}}>By subscribing, you agree to the <a href="">Terms and Conditions</a> , including the <a href="." >Cancellation and Refund Policy</a>.
          Your subscription will renew automatically, and you will be charged in advance. You may cancel at any time. The cancellation goes into effect at the start of the following billing cycle.  </p>
       
        <hr style={{marginTop: '30px', marginBottom: '30px'}}/>
        <Button variant="secondary" style={{backgroundColor: 'black', width: '30%'}}> 
          Purchase Subscription
        </Button>
        <br/>
        <br />
      </Form>
      <Card style={{alignContent:'right'}}>
        <div>

        </div>
      </Card>
      </Container>
    </div>
    </div>
  )
}

export default Premium