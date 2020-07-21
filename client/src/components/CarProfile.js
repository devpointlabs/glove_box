import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';
import axios from 'axios';
import EditCarProfileForm from './EditCarProfileForm'
import { Button, Icon } from 'semantic-ui-react'
// import CarCard from '../CarCard';

const CarProfile = (props) => {
  const [editing, setEditing] = useState(false)
  // const [carCardPage, setCarCardPage] = useState(false) was for back button to carCard but not working right 
  const [vehicle, setVehicle] = useState({});

  useEffect(() => { 
    // axios.get(`/api/vehicles/${props.id}`)                                                                                          
    //   .then((res) => {
    //     setVehicle(res.data)
    //   }).catch((e) => {
    //     console.log(e)
    //   })
    debugger
    }, [props.car])
    

  const roadsideCheck = () => {
    if (vehicle.roadside_assistance === true) {
      return (
        <div>Roadside Assistance<p>✓</p></div>
      );
    } else {
      return (
        <div>Roadside Assistance<p>X</p></div>
      )
    }
  }

  // const editCarProfile = () => {
  //   axios.put(`/api/vehicles${props.id}`)
  //     .then( res => {
  //       const updateCarProfile = props.vehicles.map( vehicle => {
  //         if (vehicle.id === res.id) return res.data;
  //           else return vehicle
  //       });
  //       props.setVehicle(updateCarProfile)
  //         setEditing(!editing) //or false
  //     })
  // }

  return (
    <>
    <div style={styles.styleForm}>
      {/* {carCardPage && <CarCard toggleCarCard={setCarCardPage} /> } kinda works as a back button but looks like crap */}
      {editing ? <EditCarProfileForm toggleEdit={setEditing} editCarProfile={props.editCarProfile} {...props.car} editVehicle={props.editVehicle}
      //  vehicles={props.vehicles} setVehicles={props.setVehicles} 
       /> :
      <>
      <h1 align='left'>Car Profile</h1>
      <hr />
      <h2 align='center'>{props.car.year} {props.car.make} {props.car.model}</h2>
      <br />
      {/* <Button onClick={() => setCarCardPage(!carCardPage) } >Dashboard</Button> kinda works as a back button but looks like crap */} 
      <Button name='edit outline' size='large' icon basic onClick={() => setEditing(!editing)} style={{float: 'right'}}> <Icon name="edit outline"/></Button>
      {/* <img src={vehicle.picture} onError={(e)=>{e.target.onerror = null; e.target.src='add vehicle url here'}}/> tried adding default vehicle image but wanst working */}
      {/* <img width={525} height={350} align='center'src={props.image} alt='no vehicle image'/>  */}
      <img width={525} height={350} align='center'src={`${props.image}`} alt='user_vehicle'/> 
      <br />
      <br />
      <br />
    <Table>
  <thead>
    <tr>  
      <th>License Plate<p>{props.license_plate}</p></th> 
      <th>VIN<p>{props.vin}</p></th>
      <th>Mileage<p>{props.mileage}</p></th> 
    </tr>
    </thead>
    </Table>
   <Table>
  <thead>
   <tr>
      <th>Insurance Provider<p>{props.insured_by}</p></th>
      <th>Policy Expiry<p>{props.policy_exp}</p></th>
      <th>Policy Number<p>{props.policy_number}</p></th>
      <th>{roadsideCheck()}</th>
      <th>Insurance Provider Number<p>{props.insurance_prov_num}</p></th>
    </tr>
    </thead>
    </Table>
    </>
  } 
  </div>
  </>
  )
}

const styles = {
  styleForm: {
    position: 'fixed',
    top: '42px',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white',
    padding: "20px",
  }
}

export default CarProfile;
