import React from 'react'
import {Container,Card} from "react-bootstrap"
import NoVehiclesToShowOnDocs from './NoVehiclesToShowOnDocs'
import VehiclesShowOnDocsPage from './VehiclesShowOnDocsPage'
import { AuthConsumer, } from "../providers/AuthProvider";
import { withRouter, } from 'react-router-dom'
import Axios from 'axios'
import Countdown from './Countdown'


class Documents extends React.Component {
  state = {vehicles: []}

  componentDidMount() {
    Axios.get(`/api/vehicles`)
    .then((res) => {
        console.log(res)
        this.setState({vehicles: res.data})
    })
    .catch((err) => console.log(err))
  }

  VehicleShow(){
    const {vehicles} = this.state
    if (vehicles.length < 1 ) {
      return (
        <NoVehiclesToShowOnDocs/>
      )
    } else {
      return (
        <VehiclesShowOnDocsPage/>
      )
    }
  }
  
  render() {
    return (
      <div style={styles.page}>
        
        <Container>
          <br/>
          <Card>
            <Card.Header align='left' as='h1' style={{fontFamily: 'Lato ', fontWeight: 'bold' }}>Documents</Card.Header>
            <Card.Body align='left' as='h3' style={{fontFamily: 'Lato ' }}>Upload and store all of your car related documents, including your service records, insurance files and more.</Card.Body>
            <Card.Text align='left' as='h4'> </Card.Text>
            <br/>
            {this.VehicleShow()}
            
          </Card>
        </Container>
      </div>
    );
  };
};


export class ConnectedDocuments extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { user =>
          <Documents {...this.props} user={user} />
        }
      </AuthConsumer>
    );
  };
};
export default withRouter(ConnectedDocuments);

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
      padding: '10px 25px',
      color: 'white',
      backgroundColor: 'black',
      borderRadius: '5px',
      marginLeft: 'auto',
      marginRight: 'auto',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      fontFamily: 'Lato ',
  }
}