import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { FilePond, File, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
// import FilePondPluginFileRename from 'filepond-plugin-file-rename';
import '../filepond.css';
import Axios from 'axios'
import { Container } from 'react-bootstrap'

registerPlugin (FilePondPluginImageExifOrientation, FilePondPluginImagePreview, )

function FileUploader ({v, eventKey, pond}){
  // const [files, setFiles] = useState([])
  // const [loading, setLoading] = useState(false)


  function setFileHandler (f){
    
    console.log('message')
    let data = new FormData()
    // const eventKey = v.record.image.category
    data.append('file', pond.getFile().file)
    data.append('category', eventKey )
    Axios.post(`/api/vehicles/${v.id}/records`, data)
    .then((res) => {
      console.log(res)
      // data.append('eventKey', eventKey)
      
    })
    .catch((err) => console.log(err))
  }

  return (
    <div >
      <FilePond
        // files={files}
        allowMultiple={true}
        ref={ref => (pond = ref)}
        onaddfile={setFileHandler}
        // allowReorder={true}
        labelIdle=' <span class="filepond--label-action">+ UPLOAD YOUR DOCUMENTS</span>'
        // allowFileRename={true}
        // instantUpload={true}
        // server="/api"
        // server="https://api.cloudinary.com/v1_1/dlikodxxc"
        // server= {upLoadFile}
        // chunkUploads={true}
        // imagePreviewHeight={null}
        // onChange={upLoadFile}
        // stylePanelLayout='integrated'
        // labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  )
}

export default FileUploader