import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';
import axios from 'axios';
import EditCarProfileForm from './EditCarProfileForm'
import { Button, Icon } from 'semantic-ui-react'
import CarCard from './CarCard';
import Dashboard from './Dashboard';

const CarProfile = (props) => {
  const [editing, setEditing] = useState(false)
  const [vehicle, setVehicle] = useState({});
  const [toggleDashPage, setToggleDashPage] = useState(false)

  useEffect(() => { 
    
    }, [props.vehicles])
    
  const roadsideCheck = () => {
    if (props.car.roadside_assistance === true) {
      return (
        <div>Roadside Assistance<p>✓</p></div>
      );
    } else {
      return (
        <div>Roadside Assistance<p>X</p></div>
      )
    }
  }

  return (
    <>
    <div style={styles.styleForm}>
      {editing ? <EditCarProfileForm toggleEdit={setEditing} editCarProfile={props.editCarProfile} {...props.car} editVehicle={props.editVehicle} deleteVehicle={props.deleteVehicle}
       /> :
      <>
      <h1 align='left'>Car Profile</h1>
      <br />
      <h3>Tell us about your vehicle. The more we know, the more up to date your car information will be.</h3>
      <hr />
      <br />
      <h2 align='center'>{props.car.year} {props.car.make} {props.car.model}</h2>
      <br />
      <Button name='edit outline' size='large' icon basic onClick={() => setEditing(!editing)} style={{float: 'right'}}> <Icon name="edit outline"/></Button>
      <Button name='edit outline' silze='large' icon basic onClick={() => props.setEditing(false)}style={{float: 'left'}}> <Icon name="arrow left"/></Button>
      {/* <img src={vehicle.picture} onError={(e)=>{e.target.onerror = null; e.target.src='add vehicle url here'}}/> tried adding default vehicle image but wanst working */}
      <img width={525} height={350} align='center'src={props.car.image} alt='user_vehicle'/> 
      <br />
      <br />
      <br />
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '5px' }} >
      <p textAlign='left' >License Plate<p>{props.car.license_plate}</p></p> 
      <p>VIN<p>{props.car.vin}</p></p>
      <p textAlign='right' >Mileage<p>{props.car.mileage}</p></p> 
      </div>
      <hr />
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '5px' }} >
      <p>Insurance Provider<p>{props.car.insured_by}</p></p>
      <p>Policy Expiry<p>{props.car.policy_exp}</p></p>
      <p>Policy Number<p>{props.car.policy_number}</p></p>
      <p>{roadsideCheck()}</p>
      <p>Insurance Provider Number<p>{props.car.insurance_prov_num}</p></p>
      </div>
    </>
  } 
  </div>
  </>
  )
}

const styles = {
  styleForm: {
    overflow: 'auto',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white',
    padding: "20px",
    zIndex: '5',
  }
}

export default CarProfile;
