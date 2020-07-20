import React, {useState, useEffect} from 'react'
import { Grid, Image, Card, Container,CardDeck, Button, Modal} from 'react-bootstrap'
import FileUploader from './FileUploader'
import NoVehiclesToShowOnDocs from './NoVehiclesToShowOnDocs'
import DocumentUploader from './DocumentUploader'
import Axios from 'axios'


function VehicleShowOnDocsPage (){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [vehicles, setVehicles] = useState([])

  useEffect(()=> {
    Axios.get(`/api/vehicles`)
    .then(res => {
        console.log(res)
        setVehicles(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  // const renderVehicles = () => {
  //   return (
  //     <>
  //     {vehicles.map((v) => (
  //       <Card bg="dark" text='white'>
  //         <Card.Img variant="top" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOxaKlejQjrB7wfSvhmaaoXUCVBXEfKYdMDQ&usqp=CAU'} />
  //         <Card.Body>
  //           <Card.Title>{v.year} {v.make} {v.model} </Card.Title>
  //           <Button variant="primary" onClick={handleShow}>
  //             View/Add Documents
  //           </Button>
  //         </Card.Body>
  //       </Card>
      
  //     ))
  //     }
  //     <Modal
  //       show={show}
  //       onHide={handleClose}
  //       backdrop="static"
  //       keyboard={false}
  //       size="lg"
  //     >
  //       <Modal.Header closeButton>
  //         <Modal.Title> {v.year} {v.make} {v.model} </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <DocumentUploader/>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="primary" onClick={handleClose}>
  //           Close
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //     </>
  //   )
  // }



  const renderVehicles = () => {
    return vehicles.map((v) => (
        <Card bg="dark" text='white'>
          <Card.Img variant="top" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOxaKlejQjrB7wfSvhmaaoXUCVBXEfKYdMDQ&usqp=CAU'} />
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
      )
    )
  }



  return(
    <>
    <Container>
     <CardDeck>
        {renderVehicles()}
    </CardDeck>
      <br/>
    </Container>
    </>
  )
}

export default VehicleShowOnDocsPage