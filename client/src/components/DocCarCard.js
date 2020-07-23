import React,{useState} from 'react'
import { Grid, Image, Card, Container,CardDeck, Button, Modal} from 'react-bootstrap'
import DocumentUploader from './DocumentUploader'
import FileShow from './FileShow';

function DocCarCard ({v}) {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
      <>
      <Card bg="dark" text='white'>
        {/* <Card.Img variant="top" key={v.id} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOxaKlejQjrB7wfSvhmaaoXUCVBXEfKYdMDQ&usqp=CAU'} />  default image from dre?*/} 
        <Card.Img variant="top" key={v.id} src={v.image} />
        <Card.Body>
          <Card.Title>{v.year} {v.make} {v.model} </Card.Title>
          <Button variant="primary" onClick={handleShow}>
            View/Add Documents
          </Button>
        
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="lg"
            key={v.id}
          >
            <Modal.Header closeButton>
              <Modal.Title> {v.year} {v.make} {v.model} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <DocumentUploader v={v}/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
        </Card>
      </>
    )
}

export default DocCarCard