import React, {useState, useEffect}from 'react'
import Axios from 'axios'
import {Image, CloudinaryContext, Cloudinary} from "cloudinary-react"
import {Card } from 'react-bootstrap'


function FileShow ({v}) {

  const [records, setRecords] = useState ([{}])
  

  useEffect(()=> {
    Axios.get(`/api/vehicles/${v.id}/records/`)
    .then(res => {
        console.log(res)
        setRecords(res.data)
    })
    .catch(err => console.log(err))
  }, [])


  const renderRecords = () => {

    return records.map((r) => (
      // <CloudinaryContext cloudName='cloud_name'>
        <div>
        
        <Image cloudName='cloud_name' publicId={r.image} width='300' secure='true' crop="scale" fetch-format="auto" dpr="auto" responsive/>
       
        </div>
      // </CloudinaryContext>
      )
    )
  }

  return (
    <div>
      {/* <Image publicID={i} /> */}
      {renderRecords()}
    </div>
  )
}
export default FileShow