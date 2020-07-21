import React, {useState, useEffect} from 'react'
import { Grid, Image, Card, Container,CardDeck, Button, Modal} from 'react-bootstrap'
import FileUploader from './FileUploader'
import NoVehiclesToShowOnDocs from './NoVehiclesToShowOnDocs'
import DocumentUploader from './DocumentUploader'
import Axios from 'axios'
import DocCarCard from './DocCarCard'


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

  const renderVehicles = () => {
    return vehicles.map((v) => (
        <DocCarCard v={v}/>
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