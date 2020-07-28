import React, {useState, useEffect}from 'react'
import Axios from 'axios'
import {Image,} from "cloudinary-react"
import {Card, Button, Container,} from 'react-bootstrap'



function FileShow ({v, eventKey}) {

  const [records, setRecords] = useState ([])
  
  useEffect(()=> {
    Axios.get(`/api/vehicles/${v.id}/records/`)
    .then(res => {
        console.log(res)
        setRecords(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  async function deleteRecord(r){
    const res = await Axios.delete(`/api/vehicles/${v.id}/records/${r.id}`)
    const newRecords = records.filter((r) => r.id !== res.data.id) 
    setRecords(newRecords)
  }

  const renderRecords = () => {
    const filterRecords = records.filter(r => r.category == eventKey)

    return filterRecords.map((r) => ( 
      <>
       <div style={{display: 'flex'}}>
        <a href={r.image}>
          <Image display='flex' cloudName='cloud_name' publicId={r.image} width='400' popup={true }overwrite={true}/>
        </a>
        <Button onClick={() => deleteRecord(r)} style={styles.buttonStyle}>Delete Document</Button>
      </div>
      <br/>
      </>  
      )
    )  
  }

  return (
    <div>
      {renderRecords()}
    </div>
  )
}
export default FileShow

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
      flexDirection:'column',
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
      maxHeight: '20px',
      padding: '10px 25px',
      color: 'white',
      backgroundColor: 'black',
      borderRadius: '5px',
      marginLeft: 'auto',
      cursor: 'pointer',
  }
}