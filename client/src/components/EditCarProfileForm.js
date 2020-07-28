import React, { useState, useEffect } from 'react'
import { Button, Container, Col, Form } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FilePond } from 'react-filepond'

const EditCarProfileForm = (props) => {
  const [editVehicle, setEditVehicle] = useState({})
  const [year, setYear] = useState (props.year ? props.year : '')
  const [make, setMake] = useState (props.make ? props.make : '')
  const [model, setModel] = useState (props.model ? props.model : '')
  const [license_plate, setLicensePlate] = useState (props.license_plate ? props.license_plate : '')
  const [vin, setVin] = useState (props.vin ? props.vin : '')
  const [mileage, setMileage] = useState (props.mileage ? props.mileage : '')
  const [insured_by, setInsuredBy] = useState (props.insured_by ? props.insured_by : '')
  const [policy_exp, setPolicyExp] = useState (props.policy_exp ? props.policy_exp : '')
  const [policy_number, setPolicyNumber] = useState (props.policy_number ? props.policy_number : '')
  const [insurance_prov_num, setInsuranceProvNum] = useState (props.insurance_prov_num ? props.insurance_prov_num : '')
  const [roadside_assistance, setRoadsideAssistance] = useState (props.roadside_assistance ? props.roadside_assistance : false)
  const [image, setImage] = useState (props.image ? props.image : 'https://www.carhuddle.com/images/default/car-default.jpg')
  const [file, setFile] = useState(null);
  

  const vehicle = { year: year, make: make, model: model, license_plate: license_plate, vin: vin, 
    mileage: mileage, insured_by: insured_by, policy_exp: policy_exp, policy_number: policy_number, 
    insurance_prov_num: insurance_prov_num, roadside_assistance: roadside_assistance, image: image, file }

  useEffect(() => { 

  }, [])

  const setFileHandler = (files) => {
    setFile(files[0].file);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    props.editVehicle(props.id, vehicle)
    props.toggleEdit(false)
  }

  const deleteVehicle = (id) => { 
    props.deleteVehicle(id);
    props.toggleEdit(false);
  }

  const handleChangeCheckbox = (e) => {
    setRoadsideAssistance({roadside_assistance: !roadside_assistance})
  }

  return (
    
    <div style={styles.page} >
        <Container>
      <Form.Label style={styles.formHeader} >Edit Car Profile</Form.Label>
      <Form  onSubmit={handleSubmit}>
        <div style={{ margin: 'auto', display: 'flex', justifyContent: 'start'}}>
        </div>
        <Form.Row>
        <Form.Group md="1" >
          <Form.Label>Year</Form.Label>
        <Form.Control 
        placeholder='Year'
        name='year'
        required
        autoFocus
        value={year}
        maxLength="4"
        onChange={(e)=> setYear(e.target.value)}
        />
        </Form.Group>
        <br />
        <div style={{  margin: 'auto', display: 'flex', justifyContent: 'start'}}>
        </div>
        <Form.Group md="1" >
          <Form.Label>Make</Form.Label>
        <Form.Control 
        placeholder='Make'
        name='make'
        required
        value={make}
        maxLength="20"
        onChange={(e)=> setMake(e.target.value)}
        />
        </Form.Group>
        <br />
        <div style={{  margin: 'auto', display: 'flex', justifyContent: 'start'}}>
        </div>
        <Form.Group md="1" >
          <Form.Label>Model</Form.Label>
        <Form.Control 
        placeholder='Model'
        name='model'
        required
        value={model}
        maxLength="20"
        onChange={(e)=> setModel(e.target.value)}
        />
        </Form.Group>
        </Form.Row>
        <br />
        <div style={{ margin: 'auto', display: 'flex', justifyContent: 'start'}}>
        </div>
        <Form.Row>
        <Form.Group md="1" >
          <Form.Label>License Plate</Form.Label>
        <Form.Control 
        placeholder='License Plate'
        name='licensePlate'
        required
        value={license_plate}
        maxLength="10"
        onChange={(e)=> setLicensePlate(e.target.value)}
        />
        </Form.Group>
        <br />
        <div style={{ margin: 'auto', display: 'flex', justifyContent: 'start'}}>
        </div>
        <Form.Group md="2" >
          <Form.Label>VIN</Form.Label>
        <Form.Control 
        placeholder='VIN'
        name='vin'
        required
        value={vin}
        maxLength="17"
        onChange={(e)=> setVin(e.target.value)}
        />
        </Form.Group>
        <br />
        <div style={{ margin: 'auto', display: 'flex', justifyContent: 'start'}}>
        </div>
        <Form.Group md="1" >
          <Form.Label>Mileage</Form.Label>
        <Form.Control 
        placeholder='Mileage'
        name='mileage'
        required
        value={mileage}
        maxLength="6"
        onChange={(e)=> setMileage(e.target.value)}
        />
        </Form.Group>
        </Form.Row>
        <br />
        <div style={{ margin: 'auto', display: 'flex', justifyContent: 'start'}}>
        </div>
        <Form.Row>
        <Form.Group md="2" >
          <Form.Label>Insurance Provider</Form.Label>
        <Form.Control 
        placeholder='Insurance Provider'
        name='insured by'
        required
        value={insured_by}
        maxLength="25"
        onChange={(e)=> setInsuredBy(e.target.value)}
        />
        </Form.Group>
        <br />
        <div style={{ margin: 'auto', display: 'flex', justifyContent: 'start'}}>
        </div>
        <Form.Group md="2" >
          <Form.Label>Policy Expiration Date</Form.Label>
        <Form.Control 
        placeholder='Policy Expiration Date'
        name='policy exp'
        required
        value={policy_exp}
        maxLength="20"
        onChange={(e)=> setPolicyExp(e.target.value)}
        />
        </Form.Group>
        <br />
        <div style={{ margin: 'auto', display: 'flex', justifyContent: 'start'}}>
        </div>
        <Form.Group md="2" >
          <Form.Label>Policy Number</Form.Label>
        <Form.Control 
        placeholder='Policy Number'
        name='policy number'
        required
        value={policy_number}
        maxLength="10"
        onChange={(e)=> setPolicyNumber(e.target.value)}
        />
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <br />
        <div style={{ margin: 'left', display: 'flex', justifyContent: 'start'}}>
        </div>
        <Form.Group md="2" >
          <Form.Label>Insurance Provider Number</Form.Label>
        <Form.Control 
        placeholder='Insurance Provider Number'
        name='insurance prov num'
        required
        value={insurance_prov_num}
        maxLength="10"
        onChange={(e)=> setInsuranceProvNum(e.target.value)}
        />
        </Form.Group>
        <br />
        <div style={{ margin: 'auto', display: 'flex', justifyContent: 'start'}}>
        </div>
        <Form.Group md="2" >
          <Form.Label>Roadside Assistance? Check for Yes</Form.Label>
        <Form.Control 
        placeholder='Roadside Assistance? Check for Yes'
        name='roadside assistance'
        type='checkbox'
        onChange={()=> setRoadsideAssistance(!roadside_assistance)}
        checked={roadside_assistance}
        />
        </Form.Group>
        </Form.Row>
        <br />
        <Button onClick={()=> setImage} type='submit'>Update</Button>
        {' '}
        <Button onClick={() => deleteVehicle(props.id)}variant="danger">Delete Vehicle</Button>
        {' '}
        <Button onClick={() => props.toggleEdit(false)}>Back</Button>
        <br/>
        <>
        <br/>
      <h5>Change Or Add Car Photo</h5>
      <FilePond
            files={file}
            allowMultiple={false}
            onupdatefiles={setFileHandler}
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
      </>
      </Form>
      </Container>
      </div>
  )
}

const styles = {
  page: {
    margin: 'auto',
    border: 'solid black 1px',
    width: '50%',
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '100px',
 },
 formHeader: {
   fontSize:'20px',
   paddingBottom: '60px',
 }
}

export default EditCarProfileForm;
