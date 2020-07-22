import React, {useState} from 'react'
import CarProfile from './components/CarProfile'


export default function CarCard(props) {
    const [editing, setEditing] = useState(false)
    
    return (
        <div style={styles.card}>
        <img src={''} style={{width:'50%'}}/>
        <div style={styles.right}>
            <h1 style={{fontSize:'30px', whiteSpace:'nowrap'}}><strong>{props.car.year} {props.car.make} {props.car.model}</strong></h1>
            <h3 style={{fontSize:'20px'}}>Unlock your vehicles estimated trade-in value and up-to-date recalls when you add your liscense plate.</h3>
            <button style={styles.buttonStyle} onClick={()=> setEditing(!editing)}><strong>EDIT VEHICLE</strong></button>
        </div>
        {editing && <CarProfile {...props} setEditing={setEditing} vehicles={props.vehicles} setVehicles={props.setVehicles} editVehicle={props.editVehicle} deleteVehicle={props.deleteVehicle}/>}
    </div>
    )
}

const styles = {
     card: {
        width:'100%',
        display: 'flex',
        border: '2px solid white',
        borderRadius: '10px',
        boxShadow: '1px 1px 6px 5px #eeeeee',
        minHeight: '300px',
        margin:'20px 0px',
        float:'left',
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
         padding: '10px 25px',
         color: 'white',
         backgroundColor: 'black',
         borderRadius: '5px',
         marginLeft: 'auto',
         marginRight: 'auto',
         whiteSpace: 'nowrap',
     }
}