import React from 'react'
import DocumentUploader from './DocumentUploader'
import {Container,Card} from "react-bootstrap"

function Documents (){
  return(

    <Container>
      <br/>
      <Card>
        <Card.Header align='left' as='h1' >Documents</Card.Header>
        <Card.Body align='left' as='h3'>Upload and store all of your car related documents, including your service records, insurance files and more.</Card.Body>
        <Card.Text align='left' as='h4'> </Card.Text>
        <DocumentUploader/>
      </Card>
      
    </Container>
    
  )
}

export default Documents