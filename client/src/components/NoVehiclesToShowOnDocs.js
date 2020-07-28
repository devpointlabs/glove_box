import React from 'react'
import { Card, Container} from 'react-bootstrap'

function NoVehiclesToShowOnDocs(){

  return(
    <>
      <Card.Body >
        <Card.Title style={{fontFamily: 'Lato', color: "#F7F7F7"}}>WHOOPS !!</Card.Title>
        <Card.Title style={{fontFamily: 'Lato', color: "#F7F7F7"}}> Please add a vehicle on the <a href="/dashboard">Dashboard</a> page before adding documents </Card.Title>
      </Card.Body>
      <br />
    </>
  )
}
export default NoVehiclesToShowOnDocs