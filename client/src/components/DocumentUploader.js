import React from 'react'
import {Container,Tabs, Tab, Form, Card} from 'react-bootstrap'
import Dropzone from 'react-dropzone'
import FileUploader from './FileUploader'
import FileShow from './FileShow'

function DocumentUploader (){
  return(
    <Container>
      <Card bg="secondary"
            text='white'>
        <Card.Body> 
          <Tabs defaultActiveKey="insurance" text='white'>
            <Tab eventKey="insurance" title="Insurance" >
              <br/>
              <br/>
              List of uploaded insurance documents
              <br/>
              <FileShow/>
              <br/>
              <br/>
              <FileUploader/>
              <br/>
             
            </Tab>
            <Tab eventKey="registration" title="Registration">
              <br/>
              <br/>
                List of uploaded registration documents
              <br/>
              <br/>
              <br/>

                <FileUploader/>
              <br/>

            </Tab>
            <Tab eventKey="service_records" title="Service Records">
              <br/>
              <br/>

                List of uploaded service_records documents
              <br/>
              <br/>
              <br/>

                <FileUploader/>
              <br/>

            </Tab>
            <Tab eventKey="others" title="Others">
              <br/>
              <br/>

                List of uploaded other documents
              <br/>
              <br/>
              <br/>

                <FileUploader/>
              <br/>

            </Tab>
        </Tabs>
      </Card.Body>
      </Card>
      <br/>
    </Container>
  )
}


export default DocumentUploader