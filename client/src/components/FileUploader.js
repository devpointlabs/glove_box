// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
// import { FilePond, File, registerPlugin } from 'react-filepond'
// import 'filepond/dist/filepond.min.css'
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
// import FilePondPluginFileRename from 'filepond-plugin-file-rename';
// import '../filepond.css';
// import Axios from 'axios'
// import { Container } from 'react-bootstrap'

// registerPlugin (FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileRename)

// function FileUploader (){
//   const [files, setFiles] = useState([])
//   const [loading, setLoading] = useState(false)


//   function setFileHandler (f){
//     let data = new FormData()
//     data.append('file', f[0].file)
//     //1 is hardcoded for vehicle ID
//     Axios.post(`/api/vehicles/1/records`, data)
//     .then((res) => {
//       console.log(res)
//     })
//     .catch((err) => console.log(err))
//   }

//   return (
//     <div >
//       <FilePond
//         files={files}
//         allowMultiple={true}
//         onupdatefiles={setFileHandler}
//         allowReorder={true}
//         labelIdle=' <span class="filepond--label-action">+ UPLOAD YOUR DOCUMENTS</span>'
//         allowFileRename={true}
//         instantUpload={true}
//         // server="/api"
//         // server="https://api.cloudinary.com/v1_1/dlikodxxc"
//         // server= {upLoadFile}
//         chunkUploads={true}
//         // imagePreviewHeight={null}
//         // onChange={upLoadFile}
//         // stylePanelLayout='integrated'
//         // labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
//       />
//     </div>
//   )
// }

// export default FileUploader