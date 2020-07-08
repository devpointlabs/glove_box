import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap';
// import { AuthConsumer } from './providers/AuthProvider';
import axios from 'axios';

const CarProfile = (props) => {
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    axios.get(`/api/vehicles/`)                                                                                                  
      .then((res) => {
        setVehicle(res.data)
      }).catch((e) => {
        console.log(e)
      })
    }, [])

  const deleteVehicle = () => {
    axios.delete(`/api/vehicles/`)
      .then((res) => props.history.goBack())
      .catch((e) => console.log(e))
  };

  return (
    <div>
      <h1 align='left'>Car Profile</h1>
      <hr />
      <h2 align='center'>{vehicle.year} {vehicle.make} {vehicle.model}</h2>
      <br />
      <Button style={{float: 'right'}}>edit</Button>
      {/* correct way to import photos? */}
      <img align='center'src={vehicle.image} alt='user_vehicle'/> 
      <br />
      <br />
      
      {/* <Table style={styles.Table}> */}
    <Table>
  <thead>
    <tr>
      <th>License Plate<p>{vehicle.license_plate}</p></th> 
      <th>VIN<p>{vehicle.vin}</p></th>
      <th>Mileage<p>{}</p></th> 
      {/* <th>Mileage<p>{record.mileage}</p></th>  */}
    </tr>
    </thead>
    </Table>
   {/* <hr/> */}
   <Table>
  <thead>
   <tr>
      <th>Insurance Provider<p>{vehicle.insured_by}</p></th>
      <th>Policy Expiry<p>{vehicle.policy_exp}</p></th>
      <th>Policy Number<p>{vehicle.policy_number}</p></th>
      <th>Roadside Assistance<p>{vehicle.roadside_assistance}</p></th>
      <th>Insurance Provider Number<p>{vehicle.insurance_prov_num}</p></th>
    </tr>
    </thead>
    </Table>
  </div>
  )
}

export default CarProfile;

//possible styling for the tables?

// const styles = {
//   Table: {
//     textAlign: 'center',
//     justifyContent: 'space-between' ,
//   }
// }
