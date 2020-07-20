import React, { useState, useContext } from 'react'
import axios from "axios"
import { Button, Form, } from "react-bootstrap"

export default function AddVehicleForm(props){
  
    const [vin, setVin ] = useState("")
    const [licensePlate, setLicensePlate ] = useState("")
    const [make, setMake ] = useState("")
    const [year, setYear ] = useState("")
    const [model, setModel ] = useState("")
    const [vinForm, setVinForm] = useState(false)
    const [makeModelForm, setMakeModelForm] = useState(false)


    const vehicle = { vin: vin, licensePlate: licensePlate, make: make, year: year, model: model  }

    const editVehicle = () => {
      // edit vehicle will have id at end
      axios.put(`/api/vehicles/${props.id}`, vehicle)
      .then( response => console.log(response))
      .catch(error => console.log(error))
    }

    const addVehicle = () => {
     // add will not have id at end for axios call
    //  check routes
      axios.post("/api/vehicles", vehicle)
      .then(response => {
        console.log(response)
        props.addVehicleToUi(response.data)
        props.setShowAddForm(false)
      })
      .catch(error => console.log(error))

    }
    // .then to tell them what to do 

    const handleSubmit = (e) => {
      e.preventDefault()
      if (props.id) {
        editVehicle(props.id, vehicle)
      } else {
        addVehicle()
      } 
    }

    const formDisplay = () => {
      if (makeModelForm == true){
        return (
          <Form onSubmit={handleSubmit}>
            <h2 align="center">Please enter make, model, adn year of your vehicle. You can always add your licence plate later</h2>
            <Form.Control
            placeholder="Make"
            name="make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            />
            <Form.Control
            placeholder="Model"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            />
            <Form.Control
            placeholder="Year"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            />
            <Button onClick={()=> setMakeModelForm(false)}>Back</Button> <Button type='submit'>Continue</Button>
          </Form>
        )
      } else if (makeModelForm == false && vinForm == true){
        return(
          <div>
          <Form onSubmit={handleSubmit}>
            <h2 align="center">Please enter vehicle vin number</h2>
            <Form.Label>Enter Vehicle Vin Number Here </Form.Label>
            <Form.Control
              placeholder="Enter Vehicle Vin Number Here"
              name="vin number"
              value={vin}
              onChange={(e) => setVin(e.target.value)}
            />

            <Button type='submit'>Continue</Button>
          </Form>
          <Button onClick={() => setVinForm(false)}>Back</Button> 
          </div>
        )
      } else {
        return (
          <div>
          <Form onSubmit={handleSubmit}>
          <h2 align="center">Please enter your license plate number</h2>
          <Form.Label>Enter Vehicle Vin Number Here </Form.Label>
          <Form.Control
            placeholder="Enter Licence Plate Number Here"
            name="licensePlate"
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
          />
          <h2>Dont know your license plate?</h2>
         <Button onClick={() => props.setShowAddForm(false)}>Back</Button> <Button type='submit'>Continue</Button>
        </Form>
        <Button onClick={() => setVinForm(true)}>ADD BY VIN</Button> <Button onClick={() => setMakeModelForm(true)}>ADD BY MAKE, YEAR, AND MODEL</Button>
        </div>
        )
      }
    }

    return (
      <div style={styles.page}>
        <h1 align="center">Add A Vehicle</h1>
        {formDisplay()}
      </div> 
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
  }
}
