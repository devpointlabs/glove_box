import React from 'react'
import {Container,Tabs, Tab, Card, Navbar, Nav} from 'react-bootstrap'
import FileUploader from './FileUploader'
import FileShow from './FileShow'

function DocumentUploader ({v}){
  return(
    <Container>
      <Card.Img key={v.id} src={v.image} />

      <Tab.Container defaultActiveKey="insurance">
        <Nav style={styles.navStyle} className="nav-fill " >
          <Nav.Item>
            <Nav.Link eventKey="insurance" title="Insurance" style={{color: 'black'}}>Insurance</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="registration" title="Registration" style={{color: 'black'}}>Registration</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="service_records" title="Service Records" style={{color: 'black'}}>Service Records</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="others" title="Others" style={{color: 'black'}}>Others</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content defaultActiveKey="insurance">
          <Tab.Pane eventKey="insurance">
            <br/>
            <FileShow v={v} eventKey="insurance"/>
            <br/>
            <FileUploader v={v} eventKey="insurance"/>
          </Tab.Pane>
          <Tab.Pane eventKey="registration">
            <br/>
            <FileShow v={v} eventKey="registration"/>
            <br/>
            <FileUploader v={v} eventKey="registration"/>
          </Tab.Pane>
          <Tab.Pane eventKey="service_records">
            <br/>
            <FileShow v={v} eventKey="service_records"/>
            <br/>
            <FileUploader v={v} eventKey="service_records" />
          </Tab.Pane>
          <Tab.Pane eventKey="others">
            <br/>
            <FileShow v={v} eventKey="others"/>
            <br/>
            <FileUploader v={v} eventKey="others"/>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      <br/>
    </Container>
  )
}

export default DocumentUploader

const styles = {
  contain: {
      maxWidth: '60%',
  },
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
      cursor: 'pointer',
      fontFamily: 'Lato ',
  },
  navStyle: {
    fontFamily: 'Lato ',
    color: 'black',
    textDecoration: "underline", 
    fontSize: "18px", 
    fontWeight: "bold"
  }
}