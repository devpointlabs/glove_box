import React, { useState, } from 'react'
import AddVehicleForm from './AddVehicleForm'

export default function ThankYouAddVehicle(props) {
    const [adding, setAdding] = useState(false)
    return (
        <div style={styles.layout}>
            <div style={styles.card}>
            <h1 style={{fontSize:'25px'}}>Thanks for signing in</h1>
            <p>Please start off by adding your first vehicle</p>
            <button style={styles.button} onClick={()=> setAdding(true)}>ADD VEHICLE</button>
            </div>
            {adding && <AddVehicleForm setAdding={setAdding}/>}
        </div>
    )
}

const styles = {
    layout: {
        display:'flex',
        justifyContent:'center',
        backgroundColor: '#F7F7F7',
    },
    card: {
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        border:'1px solid black',
        borderRadius:'3px',
        marginTop: '100px',
        padding: '30px 10px',
    },
    button: {
        backgroundColor:'black',
        color:'white',
        border: 'none',
        borderRadius:'3px',
        padding:'5px 100px',
    }
}
