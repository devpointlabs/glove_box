import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CarCard from './CarCard'
import Countdown from './Countdown'
import Loading from './Loading'
import AddVehicleForm from './AddVehicleForm'
import { Container ,Modal, Button} from 'react-bootstrap'

export default function Dashboard() {
    const [vehicles, setVehicles] = useState([])
    const [loading, setLoading] = useState(true)
    const [showAddForm, setShowAddForm] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const getVehicles = () => {
        axios.get('/api/vehicles')
        .then(res => {
            console.log(res)
            setVehicles(res.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

    useEffect(()=> {
        getVehicles()
    }, [])


    const addVehicleToUi = (vehicleObj) => {
        setVehicles([...vehicles, vehicleObj])
    }

    if (loading) return <div style={styles.centered}><Loading /></div> 
    
    const editVehicle = (id, car) => {
        const data = new FormData();
        if (car.file && car.file._relativePath) {
            data.append("file", car.file);
          }
            let key;
            for (key in car) {
        data.append(`${key}`, car[key]);
        }
        axios.put(`/api/vehicles/${id}`, data) //update method
            .then(res => {
                const updateCarProfile = vehicles.map(vehicle => {
                  if (vehicle.id === res.data.id) return res.data; // we were calling res.id and not res.data.id so it was just returning vehicle until you refresh
                    else return vehicle
                });
                setVehicles(updateCarProfile)
              }).catch(err =>{
              console.log(err)
            })
    }

    const deleteVehicle = (id) => {
        axios.delete(`/api/vehicles/${id}`)
            .then( res => {
            const filteredVehicles = vehicles.filter(vehicle => {
                return vehicle.id != res.data.id
                })
                setVehicles(filteredVehicles)
            })
    }

    return (
        <div style={styles.page}>
            <div style={styles.contain}>
                <h1 style={{textAlign:'left', fontSize:'50px', color:'#F7F7F7'}}>Dashboard</h1>
                <h3 style={{textAlign:'left', color:'#F7F7F7', fontSize:'30px', marginBottom:'30px'}}>CAR DETAILS</h3>
                <button style={styles.buttonStyle} onClick={() => handleShow()}><strong>ADD VEHICLE</strong></button>
               {vehicles.map(v => <CarCard car={{...v}} vehicles={vehicles} setVehicles={setVehicles} editVehicle={editVehicle} deleteVehicle={deleteVehicle} key={v.id} />) }

               <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body style={{fontFamily: 'Lato ' }}>
                    <AddVehicleForm  addVehicleToUi={addVehicleToUi} handleClose={handleClose}/>
                </Modal.Body>
                <Modal.Footer>
                <Button style={styles.buttonStyle} onClick={() => handleClose()}>
                    Close
                </Button>
                </Modal.Footer>
                </Modal>
               
            {/* {showAddForm && 
            <AddVehicleForm 
            showAddForm={showAddForm} 
            setShowAddForm={setShowAddForm} 
            addVehicleToUi={addVehicleToUi}
            />} */}
            </div>
            <br/>
            <Countdown/>
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
        backgroundColor: '#1C2226',
        padding: '100px',
        flexDirection:'column',
        fontFamily: 'Lato',
     },
     centered: {
         minHeight: '86vh',
         width:'100vw',
         display: 'flex',
         justifyContent: 'center',
         alignItems:'center',
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
        fontFamily: 'Lato',
        cursor: 'pointer',
    }
}