import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CarCard from './CarCard'
import AddVehicleForm from './components/AddVehicleForm'


export default function Dashboard() {
    const [vehicles, setVehicles] = useState([])
    const [showAddForm, setShowAddForm] = useState(false)
   
    const getVehicles = () => {
        axios.get('/api/vehicles')
        .then(res => {
            console.log(res)
            setVehicles(res.data)
        })
        .catch(err => console.log(err))
    }

    const addVehicleToUi = (vehicleObj) => {
        setVehicles([...vehicles, vehicleObj])
    }

    useEffect(()=> {
        getVehicles()
    }, [])
    
    const editVehicle = (id, car) => {
        debugger
        axios.put(`/api/vehicles/${id}`, car) //update method
            .then(res => {
                const updateCarProfile = vehicles.map(vehicle => {
                    debugger
                  if (vehicle.id === res.id) return res.data;
                    else return vehicle
                });
                setVehicles(updateCarProfile)
              }).catch(err =>{
              console.log(err)
            })
    }

    return (
        <div style={styles.pages}>
            <div style={styles.contain}>
                <h1 style={{textAlign:'left', fontSize:'50px'}}>Dashboard</h1>
                <h3 style={{textAlign:'left', color:'#A7AAB2', fontSize:'30px', marginBottom:'30px'}}>CAR DETAILS</h3>
               {vehicles.map(v => <CarCard car={{...v}} vehicles={vehicles} setVehicles={setVehicles} editVehicle={editVehicle} />) }
               <button onClick={() => setShowAddForm(!showAddForm)}>add vehicle</button>
            {showAddForm && 
            <AddVehicleForm 
            showAddForm={showAddForm} 
            setShowAddForm={setShowAddForm} 
            addVehicleToUi={addVehicleToUi}
            />}
            </div>
            
        </div>
    )
}

const styles = {
    contain: {
        maxWidth: '60%',
        
    },
     pages: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        padding: '100px',
     },
}