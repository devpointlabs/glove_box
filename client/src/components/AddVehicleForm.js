import React, { useState, useContext } from 'react'
import axios from "axios"
import { Button, Form, Card } from "react-bootstrap"
import { useHistory, Redirect } from 'react-router-dom'

export default function AddVehicleForm(props){
  
    const [vin, setVin ] = useState("")
    const [licensePlate, setLicensePlate ] = useState("")
    const [make, setMake ] = useState("")
    const [year, setYear ] = useState("")
    const [model, setModel ] = useState("")
    const [vinForm, setVinForm] = useState(false)
    const [makeModelForm, setMakeModelForm] = useState(false)
    const [image, setImage] = useState (props.image ? props.image : 'https://www.carhuddle.com/images/default/car-default.jpg')
    let history = useHistory()

    const vehicle = { vin: vin, licensePlate: licensePlate, make: make, year: year, model: model, image: image  }

    const editVehicle = () => {
      axios.put(`/api/vehicles/${props.id}`, vehicle)
      .then( response => console.log(response))
      .catch(error => console.log(error))
    }

    const addVehicle = () => {
      axios.post("/api/vehicles", vehicle)
      .then(response => {
        console.log(response)
        if (props.addVehicleToUi){
        props.addVehicleToUi(response.data)
        props.setShowAddForm(false)
        } else {
          history.push('/dashboard')
        }

      })
      .catch(error => console.log(error))

    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (props.id) {
        editVehicle(props.id, vehicle)
      } else {
        addVehicle()
      } 
      if (props.handleClose) props.handleClose()
    }

    const formDisplay = () => {
      if (makeModelForm == true){
        return (
          <Form onSubmit={handleSubmit}>
            <h2 align="center">Please enter make, model, and year of your vehicle. You can always add your licence plate later</h2>
            <Form.Control
            required
            placeholder="Make"
            name="make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            />
            <Form.Control
            required
            placeholder="Model"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            />
            <Form.Control
            required
            placeholder="Year"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            />
            <Button style={styles.buttonStyle} onClick={()=> setMakeModelForm(false)}>Back</Button> <Button style={styles.buttonStyle}  type='submit'>Continue</Button>
          </Form>
        )
      } else if (makeModelForm == false && vinForm == true){
        return(
          <div>
          <Form onSubmit={handleSubmit}>
            <h2 align="center">Please enter vehicle vin number</h2>
            <Form.Label>Enter Vehicle Vin Number Here </Form.Label>
            <Form.Control
              required
              placeholder="Enter Vehicle Vin Number Here"
              name="vin number"
              value={vin}
              onChange={(e) => setVin(e.target.value)}
            />

            <Button style={styles.buttonStyle} onClick={()=> setImage} type='submit'>Continue</Button>
          </Form>
          <Button style={styles.buttonStyle} onClick={() => setVinForm(false)}>Back</Button> 
          </div>
        )
      } else {
        return (
          <div>
          <Form onSubmit={handleSubmit}>
          <h2 align="center">Please enter your license plate number</h2>
          <Form.Label>Enter Vehicle Vin Number Here </Form.Label>
          <Form.Control
            required
            placeholder="Enter Licence Plate Number Here"
            name="licensePlate"
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
          />
          <h2>Dont know your license plate?</h2>


         <Button style={styles.buttonStyle} onClick={() => 
          {if(props.setShowAddForm){
            props.setShowAddForm(false)
          }else if(props.setAdding){props.setAdding(false)
          }else{
            return history.push('/dashboard')
          }}}
          >Back</Button> <Button style={styles.buttonStyle} type='submit'>Continue</Button>

        </Form>
        <Button style={styles.buttonStyle} onClick={() => setVinForm(true)}>ADD BY VIN</Button> <Button style={styles.buttonStyle}onClick={() => setMakeModelForm(true)}>ADD BY MAKE, YEAR, AND MODEL</Button>
        </div>
        )
      }
    }

    return (
        <Card>
        <h1 align="center">Add A Vehicle</h1>
        {formDisplay()}
        </Card>
    )  
}

const styles = {
  page: {
    height: '100vh',
    width: '100vw',
    zIndex: '1',
    position: 'fixed',
    top:'0px',
    left:'0px',
    backgroundColor: 'gray',
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
    fontFamily: 'Lato',
    cursor: 'pointer',
    marginTop: '10px'
  }
}
