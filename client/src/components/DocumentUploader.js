import React from 'react'
import {Container,Tabs, Tab, Form, Card} from 'react-bootstrap'
import Dropzone from 'react-dropzone'
import FileUploader from './FileUploader'

function DocumentUploader (){
  return(
    <Container>
      <Card>
        <Card.Body> 
          <Tabs defaultActiveKey="insurance">
            <Tab eventKey="insurance" title="Insurance">
              <br/>
              List of uploaded insurance documents
              <FileUploader/>
            </Tab>
            <Tab eventKey="registration" title="Registration">
              <br/>
                List of uploaded registration documents
                <FileUploader/>
            </Tab>
            <Tab eventKey="service_records" title="Service Records">
              <br/>
                List of uploaded service_records documents
                <FileUploader/>
            </Tab>
            <Tab eventKey="others" title="Others">
              <br/>
                List of uploaded other documents
                <FileUploader/>
            </Tab>
        </Tabs>
      </Card.Body>
      </Card>
      <br/>
    </Container>
  )
}


export default DocumentUploader