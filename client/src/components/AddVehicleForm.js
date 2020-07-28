import React, { useState, useContext } from 'react'
import axios from "axios"
import { Button, Form, Container, Card } from "react-bootstrap"
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
        if (props.addVehicleToUi){
        props.addVehicleToUi(response.data)
        props.setShowAddForm(false)
        } else {
          history.push('/dashboard')
        }
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
            <button style={styles.buttonStyle} onClick={()=> setMakeModelForm(false)}>Back</button> <button style={styles.buttonStyle} type='submit'>Continue</button>
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

          <button style={styles.buttonStyle} onClick={()=> setImage} type='submit'>Continue</button>
          </Form>
          <button style={styles.buttonStyle} onClick={() => setVinForm(false)}>Back</button> 
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


          <button style={styles.buttonStyle} onClick={() => props.setShowAddForm ? props.setShowAddForm(false) : props.setAdding(false)}>Back</button> <button style={styles.buttonStyle} type='submit'>Continue</button>

          </Form>
          <button style={styles.buttonStyle} onClick={() => setVinForm(true)}>ADD BY VIN</button> 
          <button style={styles.buttonStyle} onClick={() => setMakeModelForm(true)}>ADD BY MAKE, YEAR, AND MODEL</button>
          </div>
        )
      }
    }

    return (
            // <div style={styles.layout}>
            //   <div style={styles.card}>
                <div style={styles.page}>
                <Container>
                  <div >
                    <h1 align="center">Add A Vehicle</h1>
                    {formDisplay()}
                  </div>   
                </Container>
              </div>
            //   </div>
            // </div>
          
          )
      }
      
      const styles = {
       
       page: {
         display: 'flex',
         justifyContent: 'center',
         height: '100vh',
         width: '100vw',
         zIndex: '4',
         position: 'fixed',
         top:'0px',
         left:'0px',
         backgroundColor: 'white',
         border: 'solid black 1px',
         padding: '20px',
         maxWidth: 'actualWidthSize',
         margin: 'auto',
         alignItems: 'center',
        
       },
      
       buttonStyle: {
        all: 'unset',
        maxWidth: '70%',
        color: 'white',
        backgroundColor: 'black',
        borderRadius: '5px',
        marginLeft: 'auto',
        marginRight: 'auto',
        whiteSpace: 'nowrap',
        fontFamily: 'Lato',
        cursor: 'pointer',
        marginTop: '10px',
        padding: '10px 25px',

      },
      
      layout: {
        display:'flex',
        justifyContent:'center',
        backgroundColor: '#F7F7F7',
      },
      
      card: {
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        border:'1px solid black',
        borderRadius:'3px',
        marginTop: '100px',
        padding: '30px 10px',
      },
      }
      



