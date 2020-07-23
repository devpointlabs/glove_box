import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
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
  const [image, setImage] = useState (props.image ? props.image : '')
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
   
      <div>
      <Form style={styles.styleForm} onSubmit={handleSubmit}>
        <Form.Label></Form.Label>
        <Form.Label>Edit Car Profile</Form.Label>
        <Form.Control 
        placeholder='Year'
        name='year'
        required
        autoFocus
        value={year}
        onChange={(e)=> setYear(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='Make'
        name='make'
        required
        value={make}
        onChange={(e)=> setMake(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='Model'
        name='model'
        required
        value={model}
        onChange={(e)=> setModel(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='License Plate'
        name='licensePlate'
        required
        value={license_plate}
        onChange={(e)=> setLicensePlate(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='VIN'
        name='vin'
        required
        value={vin}
        onChange={(e)=> setVin(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='Mileage'
        name='mileage'
        required
        value={mileage}
        onChange={(e)=> setMileage(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='Insurance Provider'
        name='insured by'
        required
        value={insured_by}
        onChange={(e)=> setInsuredBy(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='Policy Exporation Date'
        name='policy exp'
        required
        value={policy_exp}
        onChange={(e)=> setPolicyExp(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='Policy Number'
        name='policy number'
        required
        value={policy_number}
        onChange={(e)=> setPolicyNumber(e.target.value)}
        />
        <br />
        <Form.Control 
        placeholder='Insurance Provider Number'
        name='insurance prov num'
        required
        value={insurance_prov_num}
        onChange={(e)=> setInsuranceProvNum(e.target.value)}
        />
        <br />
        <h6>Roadside Assistance? Check the box for Yes</h6>
        <Form.Control 
        placeholder='Roadside Assistance? Check for Yes'
        name='roadside assistance'
        type='checkbox'
        onChange={()=> setRoadsideAssistance(!roadside_assistance)}
        checked={roadside_assistance}
        />
        <br />
        <Button type='submit'>Update</Button>
        {' '}
        <Button onClick={() => deleteVehicle(props.id)}variant="danger">Delete Vehicle</Button>
        {' '}
        <Button onClick={() => props.toggleEdit(false)}>Back</Button>
        <br/>
        <>
        <br/>
      <h6>Edit Car Photo</h6>
      <FilePond
            files={file}
            allowMultiple={false}
            onupdatefiles={setFileHandler}
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
      </>
      </Form>
      </div>
  )
}

const styles = {
  styleForm: {
    overflow: 'auto',
    padding: '20px',
    width: '30px',
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    width: '100vw',
    height: '86vh',
    backgroundColor: 'white',
  }
}

export default EditCarProfileForm;
