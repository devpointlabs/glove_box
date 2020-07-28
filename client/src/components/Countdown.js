import React from 'react'
import Axios from 'axios'
import { Card } from 'react-bootstrap'

class Countdown extends React.Component {
  state = {vehicles: []}


  componentDidMount() {
    Axios.get(`/api/vehicles`)
    .then((res) => {
        console.log(res)
        this.setState({vehicles: res.data})
    })
    .catch((err) => console.log(err))
  }

  countdownShow (){
    const {vehicles} = this.state
    const maxVehiclesAllowed = 3
    const value = maxVehiclesAllowed - vehicles.length
    return(
      <div>
        {value}
      </div>
    )
  }

  render(){
    return(
      <div>
        <Card  style={{width:'40em', background: '#F7F7F7', }}>
          <Card.Body>
            <Card.Text style={{color: 'black'}}>
            Number of vehicle profiles remaining on the free trial version
            </Card.Text>
            <Card.Text style={{color: 'red', fontWeight: 'bold', fontSize: '25px'} }>
            {this.countdownShow ()}
            </Card.Text>
            <Card.Text style={{color: 'black'}}>
              Sign up for a <a style={{fontWeight: 'bold'}} href='/premium'>Premium</a> subscription 
            </Card.Text> 
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Countdown