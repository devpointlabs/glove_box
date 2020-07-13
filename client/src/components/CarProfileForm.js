import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const CarProfileForm = (props) => {
  const [year, setYear] = useState ('')
  const [make, setMake] = useState ('')
  const [model, setModel] = useState ('')
  const [license_plate, setLicensePlate] = useState ('')
  const [vin, setVin] = useState ('')
  const [mileage, setMileage] = useState ('')
  const [insured_by, setInsuredBy] = useState ('')
  const [policy_exp, setPolicyExp] = useState ('')
  const [policy_number, setPolicyNumber] = useState ('')
  const [roadside_assistance, setRoadsideAssistance] = useState ('')
  const [insurance_prov_num, setInsuranceProvNum] = useState ('')
  

  const vehicle = {license_plate }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(props.editCarProfile){
      props.editCarProfile(props.id, vehicle)
    } else {
      axios.post('/api/vehicles', {license_plate})
        .then(res => {
          props.addForm(res.data)
        })
      }
  }

  return (
    <>
      <div>
        <Form
        bg="light"
        border="dark"
        style={{
          width: "40rem",
          padding: "10px",
          align: 'center',
        }}>
      <Form onSubmit={handleSubmit}>
        <Form.Label></Form.Label>
        <Form.Label>Edit Car Profile</Form.Label>
        <Form.Control 
        placeholder='Year'
        name='year'
        required
        value={year}
        onChange={(e) => setYear(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='Make'
        name='make'
        required
        value={make}
        onChange={(e) => setMake(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='Model'
        name='model'
        required
        value={model}
        onChange={(e) => setModel(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='License Plate'
        name='licensePlate'
        required
        value={license_plate}
        onChange={(e) => setLicensePlate(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='VIN'
        name='vin'
        required
        value={vin}
        onChange={(e) => setVin(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='Mileage'
        name='mileage'
        required
        value={mileage}
        onChange={(e) => setMileage(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='Insurance Provider'
        name='insured by'
        required
        value={insured_by}
        onChange={(e) => setInsuredBy(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='Policy Exporation'
        name='policy exp'
        required
        value={policy_exp}
        onChange={(e) => setPolicyExp(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='Policy Number'
        name='policy number'
        required
        value={policy_number}
        onChange={(e) => setPolicyNumber(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='Roadside Assistance'
        name='roadside assistance'
        required
        value={roadside_assistance}
        onChange={(e) => setRoadsideAssistance(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='Insurance Provider Number'
        name='insurance prov num'
        required
        value={insurance_prov_num}
        onChange={(e) => setInsuranceProvNum(e.target.value)}
        />
        <br />
        <Button type='submit'>Submit</Button>
        {/* <Button onClick={() => history.goBack()}>Back</Button> */}
        <Button>Back</Button>
      </Form>
      </Form>
      </div>
    </>
  )
}

export default CarProfileForm;

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