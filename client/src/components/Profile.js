import React, { useState, } from "react";
import ProfileForm from "./ProfileForm";
import { Button, Card, } from "react-bootstrap";

const Profile = (props) => {
  const [editing, setEditing] = useState(false)

  const profile = { id: props.id, fname: props.fname, 
    lname: props.lname, email: props.email, birthday: props.birthday, postal_code: props.postal_code, password: props.password }

  return (
    <>
      <div>
        <Card
          bg="light"
          border="dark"
          style={{
            width: "50rem",
            padding: "10px",
          }}>
            {editing ? <ProfileForm toggleEdit={setEditing} editProfile={props.editProfile} {...props} /> : 
            <Card.Body>
                <Card.Header>Personal Details</Card.Header>
            <Card.Body>First Name: {props.fname}</Card.Body>
            <Card.Body>Last Name: {props.lname}</Card.Body>
            <Card.Body>Email: {props.email}</Card.Body>
            <Card.Body>Date of Birth {props.birthday}</Card.Body>
            <Card.Header>RGB account...</Card.Header>
            <Card.Body>Postal Code: {props.postal_code}</Card.Body>
            <Card.Header>Change Password</Card.Header>
            <Card.Body>Current Password: {props.password}</Card.Body>
            <Card.Body>New Password: {props.password}</Card.Body>
          </Card.Body> 
          }
          
          <Card.Footer>
            <Button
              size="lg"
              variant="outline-warning"
              onClick={() => setEditing(!editing)}
            >
              Edit
              </Button>
          </Card.Footer>
        </Card>
        <br />
      </div>
    </>
  )
};

export default Profile;