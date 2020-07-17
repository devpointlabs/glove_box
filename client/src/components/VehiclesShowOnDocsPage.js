import React, {useState} from 'react'
import { Grid, Image, Card, Container,CardDeck, Button, Modal} from 'react-bootstrap'
import FileUploader from './FileUploader'
import NoVehiclesToShowOnDocs from './NoVehiclesToShowOnDocs'
import DocumentUploader from './DocumentUploader'


function VehicleShowOnDocsPage (){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(
    <>
    <Container>
      <CardDeck>
        <Card bg="dark"
            text='white'>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>User Vehicle 1 - Year, Make, Model</Card.Title>
            <Button variant="primary" onClick={handleShow}>
              View/Add Documents
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              size="lg"
            >
              <Modal.Header closeButton>
                <Modal.Title>User Vehicle 1 - Year, Make, Model</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <DocumentUploader/>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
          
        </Card>
        <Card bg="dark"
            text='white'>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>User Vehicle 2 - Year, Make, Model</Card.Title>
            <Button variant="primary" onClick={handleShow}>
              View/Add Documents
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              size="lg"
            >
              <Modal.Header closeButton>
                <Modal.Title>User Vehicle 2 - Year, Make, Model</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <DocumentUploader/>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
          
        </Card>
        <Card bg="dark"
            text='white'>
          <Card.Img variant="top" src="holder.js/100px1600" />
          <Card.Body>
            <Card.Title>User Vehicle 3 - Year, Make, Model</Card.Title>
            <Button variant="primary" onClick={handleShow}>
              View/Add Documents
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              size="lg"
            >
              <Modal.Header closeButton>
                <Modal.Title>User Vehicle 3 - Year, Make, Model</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <DocumentUploader/>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
          
        </Card>
      </CardDeck>
      <br/>
    </Container>

    </>
  )
}



export default VehicleShowOnDocsPage