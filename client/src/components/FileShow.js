import React from 'react'
import Axios from 'axios'

class FileShow extends React.Component {

  state = {records: []}


  renderFiles (){
    const {records} = this.state
    Axios.get(`/api/vehicles/1/records`)
    .then((res) => {
        console.log(res)
        this.setState({records: res.data})
    })
    .catch((err) => console.log(err))
  }


  render() {
    return(
      <div>
        {this.renderFiles()}
      </div>
    )
  }
}

export default FileShow