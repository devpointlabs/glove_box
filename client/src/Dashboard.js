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
     },
     card: {
        width:'90%',
        display: 'flex',
        border: '2px solid white',
        borderRadius: '10px',
        boxShadow: '1px 1px 6px 5px #eeeeee',
        minHeight: '300px',
     },
     right: {
         display: 'flex',
         flexDirection: 'column',
         justifyContent:'space-around',
         minWidth: '45%',
         maxWidth:'50%',
         padding: '20px 60px',
         backgroundColor: 'white',
         height:'300px',
     },
     buttonStyle: {
         all: 'unset',
         maxWidth: '70%',
         padding: '10px 15px',
         color: 'white',
         backgroundColor: 'black',
         borderRadius: '5px',
         marginLeft: 'auto',
         marginRight: 'auto',
     }
}