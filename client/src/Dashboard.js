import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import CarCard from './CarCard'

export default function Dashboard() {
    const [vehicles, setVehicles] = useState([])
   
    const getVehicles = () => {
        Axios.get(`/api/vehicles`)
        .then(res => {
            console.log(res)
            setVehicles(res.data)
        })
        .catch(err => console.log(err))
    }

    useEffect(()=> {
        getVehicles()
    }, [])
    
    return (
        <div style={styles.page}>
            <div style={styles.contain}>
                <h1 style={{textAlign:'left', fontSize:'50px'}}>Dashboard</h1>
                <h3 style={{textAlign:'left', color:'#A7AAB2', fontSize:'30px', marginBottom:'30px'}}>CAR DETAILS</h3>
               {vehicles.map(v => <CarCard {...v} />) }
            </div>
        </div>
    )
}

const styles = {
    contain: {
        maxWidth: '60%',
        
    },
     page: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        padding: '100px',
     },
}