import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FilePond } from 'react-filepond'

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
  //this is another option for doing the form 
  
  //getting with caden today to connect our pages together 

  // useEffect (() => {
  //   if(props.vehicle) {
  //     setEditVehicle(props.vehicle.name)
  //   }
  // },[])

  useEffect((id) => { //added in id in useEffect so i dont get an error for now
    axios.get(`/api/vehicles/${id}`) //show method
      .then(res => {
        setEditVehicle(res.data)
      }).catch(err => {
          console.log(err)
      })
  })

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if(props.editCarProfile){
  //     props.editCarProfile(props.id)
  //   } else {
  //     axios.put(`/api/vehicles`)
  //     // axios.put(`/api/vehicles/${id}`) correct axios call 'id undefiend'
  //       .then(res => {
  //         setEditVehicle(res.data)
  //         props.history.goBack()
  //       }).catch((err) => {
  //         console.log(err)
  //       })
  //     }
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`/api/vehicles`)
      // axios.put(`/api/vehicles/${id}`) //update method
        .then(res => {
          setEditVehicle(res.data)
          props.history.goBack()
        }).catch(err =>{
          console.log(err.response)
        })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditVehicle({
      [name]: value,
    })
  }

  const deleteVehicle = (id) => { //take out id once you have props from other page
    axios.delete(`/api/vehicles/${id}`) //destroy method
      .then((res) => props.history.goBack())
      .catch((e) => console.log(e))
  };

  const handleChangeCheckbox = (e) => {
    setEditVehicle({roadside_assistance: !editVehicle.roadside_assistance})
  }

  //  goBack() {
  //   this.props.history.goBack()
  // }

  return (
   
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
        placeholder='Insurance Provider Number'
        name='insurance prov num'
        required
        value={editVehicle.insurance_prov_num}
        onChange={handleChange}
        />
        <br />
        <h6>Roadside Assistance? Check the box for Yes</h6>
        <Form.Control 
        placeholder='Roadside Assistance? Check for Yes'
        name='roadside assistance'
        required
        type='checkbox'
        onChange={handleChangeCheckbox}
        checked={editVehicle.roadside_assistance}
        />
        <br />
        <Button type='submit'>Update</Button>
        {' '}
        <Button onClick={deleteVehicle}variant="danger">Delete Vehicle</Button>
        {' '}
        <Button onClick={() => props.history.goBack()}>Back</Button>
        {/* WORKING BACK BUTTON IF WE WANT IT */}
        <br/>
        <>
        <br/>
      <h6>Edit Car Photo</h6>
      <FilePond route={`/api/vehicles/`}/>
      {/* <img style={{borderRadius: "3px"}} width="250" height="auto"src={editVehicle.file}  /> */}
      </>
      </Form>
      </Form>
      </div>
  )
}

export default EditCarProfileForm;

// SCHEMA
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