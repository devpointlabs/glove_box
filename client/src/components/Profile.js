
import React from "react";
import { Header } from "semantic-ui-react";
import { Button, Table, } from "react-bootstrap"
 
function Profile() {
    return (
        <>
        <Header as="h1" textAlign="left"> Account Settings </Header>

    <h4 class="text-left">Personal Details</h4>
        <Table  >
 
  
  <tbody class="text-left">
    <tr>
      <td style={{backgroundColor: "lightgray", border: "1px solid black",}}>First Name</td>
      <td style={{backgroundColor: "lightgray", border: "1px solid black"}}>Last Name</td>
    </tr>
    <tr>
      <td style={{backgroundColor: "lightgray", border: "1px solid black",}}>Email</td>
      <td style={{backgroundColor: "lightgray", border: "1px solid black",}}>Date Of Birth</td>
    </tr>
    <br></br>

    <p style={{textAlign: "left", fontSize: "15px"}}>Connect to your RBC Account</p>

    <tr>
      <td style={{backgroundColor: "lightgray", border: "1px solid black",}}>Postal Code</td>
    </tr>

    <p style={{textAlign: "left", fontSize: "25px"}}>Password</p>

    <tr>
      <td style={{backgroundColor: "lightgray", border: "1px solid black",}}>*******</td>
    </tr>
<br></br>
  </tbody>
</Table>
<p style={{textAlign: "left", fontSize: "25px"}}>Communication Preferences</p>
  <div class="ui checkbox" style={{backgroundColor: "white", border: "1px solid black",}}>
   <input type="checkbox"/>
  <label><p style={{fontSize: "25px", textAlign: "left" }} >
      Get recall notifications and exclusive offers - all to your inbox. Unsubscribe from promotional email at any time.
      <br></br>
      <br></br>
        If you wish to contact us about your consent,  please email us at hello@talktodrive.com.
        </p>
  </label>
   </div>
   <br></br><br></br>
   <Button variant="warning" >
            Edit Profile       
             </Button>
        {/* <Button primary type="submit">
        Save Changes
        </Button> */}
        <br></br> <br></br>
        <Button variant="danger" type="submit">
            Delete Account      
            </Button>

</>
    )
}

export default Profile








// {/* <div style={{border: "1px solid black", padding: "10px"}}>
//              <Header as="h1" textAlign="left"> Account Settings </Header>
//              <Header as="h3" textAlign="left"> Personal Details</Header>
// <Table celled>
   

//     <Table.Body>

//       <Table.Row style={{backgroundColor: "lightgray"}}>
//         <Table.Cell>First Name</Table.Cell>
//         <Table.Cell>Last Name</Table.Cell>
//         </Table.Row>
    

//       <Table.Row style={{backgroundColor: "lightgray"}}>
//         <Table.Cell>Email</Table.Cell>
//         <Table.Cell>Date of Birth</Table.Cell>
//       </Table.Row  >

//         <hr></hr>
//         <br></br>
//       <p style={{fontSize: "20px", textAlign: "left" }}>Connect to your RBC Account</p>
//       {/* <br></br> */}
//       <Table.Row style={{backgroundColor: "lightgray"}}>
//         <Table.Cell><Container >Postal Code</Container></Table.Cell>
        
//       </Table.Row>
//       <br></br>
//       <Table.Header as="h1" >Password</Table.Header>
//       <hr></hr>
//       <Table.Row style={{backgroundColor: "lightgray"}}>
//         <Table.Cell><Container >Password</Container></Table.Cell>
//       </Table.Row>


//       <Header as="h2" textAlign="left"> Communication Preferences </Header>
//       <hr></hr>
//       <div class="ui checkbox">
//   <input type="checkbox"/>
//   <label><p style={{fontSize: "25px", textAlign: "left" }} >Get recall notifications and exclusive offers - all to your inbox. Unsubscribe from promotional email at any time.
//       <br></br>
//       <br></br>
//         If you wish to contact us about your consent,  please email us at hello@talktodrive.com.
//         </p>
//   </label>
// </div>

// <hr></hr>
      
//     </Table.Body>

   
//   </Table>
        




       
      
//         </div> */}