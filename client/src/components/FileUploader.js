import React from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import '../filepond.css';
import Axios from 'axios'


registerPlugin (FilePondPluginImageExifOrientation, FilePondPluginImagePreview, )

function FileUploader ({v, eventKey, pond}){

  function setFileHandler (f){
    
    console.log('message')
    let data = new FormData()
    data.append('file', pond.getFile().file)
    data.append('category', eventKey )
    Axios.post(`/api/vehicles/${v.id}/records`, data)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err))
  }

  return (
    <div >
      <FilePond
        allowMultiple={true}
        ref={ref => (pond = ref)}
        onaddfile={setFileHandler}
        labelIdle=' <span class="filepond--label-action">+ UPLOAD YOUR DOCUMENTS</span>'
      />
    </div>
  )
}

export default FileUploader