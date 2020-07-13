import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';
import CarProfileForm from './CarProfileForm'

const CarProfile = () => {
  const [editing, setEditing] = useState(false)
  const [vehicle, setVehicle] = useState([])
  //   'id':1,
  //   'make':'Nissan',
  //   'year':2012,
  //   'model':'GTR r35',
  //   'image': 'https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/1280x782/546b6e926ded9_-_2012-nissan-gt-r-1-lg.jpg?resize=768:*',
  //   'license_plate':'A28BD4',
  //   'vin':'12345abc678defg',
  //   'mileage':70250,
  //   'insured_by':'Progressive',
  //   'policy_exp': '12/20/20',
  //   'policy_number':'10293847',
  //   'roadside_assistance':'true',
  //   'insurance_prov_num':'002138546',
  // },);


  
  useEffect((id) => {
    axios.get(`/api/vehicles/${id}`)                                                                                                  
      .then((res) => {
        setVehicle(res.data)
      }).catch((e) => {
        console.log(e)
      })
    }, [])

  // const deleteVehicle = (id) => {
  //   axios.delete(`/api/vehicles/${id}`)
  //     .then((res) => props.history.goBack())
  //     .catch((e) => console.log(e))
  // };

  const roadsideCheck = () => {
    if (vehicle.roadside_assistance === true) {
      return (
        <div>Roadside Assistance<p>YES</p></div>
      );
    } else {
      return (
        <div>Roadside Assistance<p>NO</p></div>
      )
    }
  }

  const editCarProfile = (id, vehicle) => {
    axios.put(`/api/vehicles${id}`, vehicle)
      .then( res => {
        const updateCarProfile = vehicle.map( vehicle => {
          if (vehicle.id === id)
            return res.data;
          return vehicle
        });
        setVehicle(updateCarProfile)
      })
  }

  return (
    <>
    <div>
      {/* {editing ? <CarProfileForm toggleEdit={setEditing} editCarProfile={props.editCarProfile} {...props} /> : */}
      <>
      <h1 align='left'>Car Profile</h1>
      <hr />
      <h2 align='center'>{vehicle.year} {vehicle.make} {vehicle.model}</h2>
      <br />
      <Button onClick={() => setEditing(!editing)} style={{float: 'right'}}>edit</Button>
      <img width={525} height={350} align='center'src={vehicle.image} alt='user_vehicle'/> 
      <br />
      <br />
    <Table>
  <thead>
    <tr>  
      <th>License Plate<p>{vehicle.license_plate}</p></th> 
      <th>VIN<p>{vehicle.vin}</p></th>
      <th>Mileage<p>{vehicle.mileage}</p></th> 
    </tr>
    </thead>
    </Table>
   <Table>
  <thead>
   <tr>
      <th>Insurance Provider<p>{vehicle.insured_by}</p></th>
      <th>Policy Expiry<p>{vehicle.policy_exp}</p></th>
      <th>Policy Number<p>{vehicle.policy_number}</p></th>
      <th>{roadsideCheck()}</th>
      <th>Insurance Provider Number<p>{vehicle.insurance_prov_num}</p></th>
    </tr>
    </thead>
    </Table>
    </>
  {/* } */}
  </div>
  </>
  )
}

export default CarProfile;
