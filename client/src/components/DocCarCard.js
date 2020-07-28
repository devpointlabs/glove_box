import React,{useState} from 'react'
import { Card, Button, Modal} from 'react-bootstrap'
import DocumentUploader from './DocumentUploader'


function DocCarCard ({v}) {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
      <>
      <Card bg="dark" text='white' max-width='300rem'style={styles.card}>
        {/* <Card.Img variant="top" key={v.id} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOxaKlejQjrB7wfSvhmaaoXUCVBXEfKYdMDQ&usqp=CAU'} />  default image from dre?*/} 
        <Card.Img style={styles.image} variant="top" key={v.id} src={v.image} />
        <Card.Body>
          <Card.Title style={{fontFamily: 'Lato ' }}>{v.year} {v.make} {v.model} </Card.Title>
          <Button  onClick={handleShow} style={styles.buttonStyle}>
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
              <Modal.Title  style={{fontFamily: 'Lato ' }}> {v.year} {v.make} {v.model} </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{fontFamily: 'Lato ' }}>
              <DocumentUploader v={v}/>
            </Modal.Body>
            <Modal.Footer>
              <Button style={styles.buttonStyle} onClick={handleClose}>
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

const styles = {
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
      fontFamily: 'Lato ',
      cursor: 'pointer',
  },
    card: {
      border: '2px solid white',
      borderRadius: '10px',
      boxShadow: '1px 1px 6px 5px #eeeeee',
  },
  image: {
    minHeight: '300px',
    // minWidth: '300px',
    // maxHeight: '300px',
    // maxWidth: '300px',
  }
}