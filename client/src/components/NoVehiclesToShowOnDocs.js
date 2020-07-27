import React from 'react'
import { Card, Container} from 'react-bootstrap'

function NoVehiclesToShowOnDocs(){

  return(
    <>
        <Container>
          <Card
            bg="dark"
            text='white'
          >
            <Card.Body>
              <Card.Title style={{fontFamily: 'Lato' }}> Please add a vehicle on the <a href="/dashboard">Dashboard</a> page before adding documents </Card.Title>
            </Card.Body>
          </Card>
        </Container>
        <br />
        </>
  )
}
export default NoVehiclesToShowOnDocs