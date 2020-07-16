import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { FilePond, File, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import FilePondPluginFileRename from 'filepond-plugin-file-rename';
import '../App.css';
import Axios from 'axios'

registerPlugin (FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileRename)

function FileUploader (){
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)


  // const upLoadFile = (dlikodxxc, Digital_Glovebox) => ({
  //   process: (file, load, error, progress, abort) => {

  //       const url = `https://api.cloudinary.com/v1_1/dlikodxxc`;
  //       const xhr = new XMLHttpRequest();
  //       const formData = new FormData();

  //       xhr.open('POST', url, true);
  //       xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  //       xhr.upload.addEventListener('progress', e => {
  //           progress(e.lengthComputable, e.loaded, e.total);
  //       });

  //       xhr.onreadystatechange = e => {

  //           if (xhr.readyState !== 4) {
  //               return;
  //           }

  //           if (xhr.status >= 200 && xhr.status < 300) {
  //               const response = JSON.parse(xhr.responseText);
  //               load(response.public_id);
  //               return;
  //           }
  //           error('Error!');
  //       };

  //       formData.append('upload_preset', 'Digital_Glovebox');
  //       // formData.append('tags', 'browser_upload');
  //       formData.append('file', file);
  //       xhr.send(formData);
        
  //       return {
  //           abort: () => {
  //               xhr.abort();
  //           }
  //       }
  //   },
  //   revert: null
  // });



  return (
    <div className="App">
      <FilePond
        files={files}
        allowMultiple={true}
        onupdatefiles={setFiles}
        allowReorder={true}
        labelIdle=' + UPLOAD YOUR DOCUMENTS'
        allowFileRename={true}
        instantUpload={true}
        // server="/api"
        server="https://api.cloudinary.com/v1_1/dlikodxxc"
        // server= {upLoadFile}
        chunkUploads={true}
        // imagePreviewHeight={null}
        // onChange={upLoadFile}
        // stylePanelLayout='integrated'
        // labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  )
}

// class FileUploader extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       // Set initial files, type 'local' means this is a file
//       // that has already been uploaded to the server (see docs)
//       files: [
//         {
//           source: "index.html",
//           options: {
//             type: "local"
//           }
//         }
//       ]
//     };
//   }

//   handleInit() {
//     console.log("FilePond instance has initialised", this.pond);
//   }

//   render() {
//     return (
//       <div className="App">
//         {/* Pass FilePond properties as attributes */}
//         <FilePond
//           ref={ref => (this.pond = ref)}
//           files={this.state.files}
//           allowMultiple={true}
//           maxFiles={3}
//           server="/api"
//           name="files" 
//           oninit={() => this.handleInit()}
//           onupdatefiles={fileItems => {
//             this.setState({
//               files: fileItems.map(fileItem => fileItem.file)
//             });
//           }}
//         />
//       </div>
//     );
//   }
// }

export default FileUploader