import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'

const CarProfileForm = (props) => {
  const [licensePlate, setLicensePlate] = useState ('')

  const vehicle = { licensePlate: licensePlate }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(props.editCarProfile){
      props.editCarProfile(props.id, vehicle)
    } else {
      axios.post('/api/vehicles', {licensePlate})
        .then(res => {
          props.addForm(res.data)
        })
      }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Label>License Plate</Form.Label>
        <Form.Control 
        placeholder='License Plate'
        name='licensePlate'
        required
        value={licensePlate}
        onChange={(e) => setLicensePlate(e.target.value)}
        />
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
}

export default CarProfileForm;
