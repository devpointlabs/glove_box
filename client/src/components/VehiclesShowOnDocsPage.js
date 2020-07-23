import React, {useState, useEffect} from 'react'
import { Container,CardDeck, CardColumns} from 'react-bootstrap'
import Axios from 'axios'
import DocCarCard from './DocCarCard'


function VehicleShowOnDocsPage (){

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
     <CardColumns >
        {renderVehicles()}
    </CardColumns>
      <br/>
    </Container>
    </>
  )
}

export default VehicleShowOnDocsPage