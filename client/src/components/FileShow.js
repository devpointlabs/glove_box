import React, {useState, useEffect}from 'react'
import Axios from 'axios'
import {Image,} from "cloudinary-react"
import {Card, Button } from 'react-bootstrap'


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
        <Card bg="secondary">
        <Image cloudName='cloud_name' publicId={r.image} width='300' popup={true }overwrite={true}
        />
        <Button width='300' variant="danger" onClick={() => deleteRecord(r)}>Delete Document</Button>
        </Card> 
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