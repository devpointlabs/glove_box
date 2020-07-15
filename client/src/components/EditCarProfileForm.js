import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const EditCarProfileForm = (props) => {
  const [editVehicle, setEditVehicle] = useState({})
  // const [year, setYear] = useState ('')
  // const [make, setMake] = useState ('')
  // const [model, setModel] = useState ('')
  // const [license_plate, setLicensePlate] = useState ('')
  // const [vin, setVin] = useState ('')
  // const [mileage, setMileage] = useState ('')
  // const [insured_by, setInsuredBy] = useState ('')
  // const [policy_exp, setPolicyExp] = useState ('')
  // const [policy_number, setPolicyNumber] = useState ('')
  // const [roadside_assistance, setRoadsideAssistance] = useState ('')
  // const [insurance_prov_num, setInsuranceProvNum] = useState ('')
  

  useEffect((id) => { //added in id in useEffect so i dont get an error for now
    axios.get(`/api/vehicles/${id}`)
      .then(res => {
        setEditVehicle(res.data)
      })
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if(props.editCarProfile){
      props.editCarProfile(props.id)
    } else {
      axios.put(`/api/vehicles`)
      // axios.put(`/api/vehicles/${id}`) correct axios call 'id undefiend'
        .then(res => {
          setEditVehicle(res.data)
          props.history.goBack()
        })
      }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditVehicle({
      [name]: value,
    })
  }

  //  goBack() {
  //   this.props.history.goBack()
  // }

  return (
    <>
      <div>
        <Form
        bg="light"
        border="dark"
        style={{
          border: 'black',
          width: "40rem",
          padding: "10px",
          justifyContent: 'center',
          alignItems: 'center',
        }}>
      <Form onSubmit={handleSubmit}>
        <Form.Label></Form.Label>
        <Form.Label>Edit Car Profile</Form.Label>
        <Form.Control 
        placeholder='Year'
        name='year'
        required
        autoFocus
        value={editVehicle.year}
        onChange={handleChange}
        />
        <br />
        <Form.Control 
        placeholder='Make'
        name='make'
        required
        value={editVehicle.make}
        onChange={handleChange}
        />
        <br />
        <Form.Control 
        placeholder='Model'
        name='model'
        required
        value={editVehicle.model}
        onChange={handleChange}
        />
        <br />
        <Form.Control 
        placeholder='License Plate'
        name='licensePlate'
        required
        value={editVehicle.license_plate}
        onChange={handleChange}
        />
        <br />
        <Form.Control 
        placeholder='VIN'
        name='vin'
        required
        value={editVehicle.vin}
        onChange={handleChange}
        />
        <br />
        <Form.Control 
        placeholder='Mileage'
        name='mileage'
        required
        value={editVehicle.mileage}
        onChange={handleChange}
        />
        <br />
        <Form.Control 
        placeholder='Insurance Provider'
        name='insured by'
        required
        value={editVehicle.insured_by}
        onChange={handleChange}
        />
        <br />
        <Form.Control 
        placeholder='Policy Exporation'
        name='policy exp'
        required
        value={editVehicle.policy_exp}
        onChange={handleChange}
        />
        <br />
        <Form.Control 
        placeholder='Policy Number'
        name='policy number'
        required
        value={editVehicle.policy_number}
        onChange={handleChange}
        />
        <br />
        <Form.Control 
        placeholder='Roadside Assistance Put "Yes" or "No"'
        name='roadside assistance'
        required
        value={editVehicle.roadside_assistance}
        onChange={handleChange}
        />
        <br />
        <Form.Control 
        placeholder='Insurance Provider Number'
        name='insurance prov num'
        required
        value={editVehicle.insurance_prov_num}
        onChange={handleChange}
        />
        <br />
        <Button type='submit'>Update</Button>
        {' '}
        <Button variant="danger">Delete Vehicle</Button>
        {/* <Button onClick={() => props.history.goBack()}>Back</Button> */}
        {/* WORKING BACK BUTTON IF WE WANT IT */}
      </Form>
      </Form>
      </div>
    </>
  )
}

export default EditCarProfileForm;

// "make"
//     t.string "model"
//     t.integer "year"
//     t.string "color"
//     t.string "type"
//     t.string "vin"
//     t.boolean "roadside_assistance"
//     t.string "insured_by"
//     t.string "policy_number"
//     t.string "image"
//     t.bigint "user_id"
//     t.datetime "created_at", precision: 6, null: false
//     t.datetime "updated_at", precision: 6, null: false
//     t.string "license_plate"
//     t.string "policy_exp"
//     t.string "insurance_prov_num"
//     t.integer "mileage"