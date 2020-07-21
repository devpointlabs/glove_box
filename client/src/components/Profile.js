import React, { useState, useContext } from "react";
import ProfileForm from "./ProfileForm";
import { Button, Card, } from "react-bootstrap";
import { AuthContext } from '../providers/AuthProvider'
const Profile = (props) => {
  const [editing, setEditing] = useState(false)
const {user} = useContext(AuthContext)
  const profile = { id: user.id, fname: user.fname, 
    lname: user.lname, email: user.email, birthday: user.birthday, postal_code: user.postal_code, password: user.password }
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
            {editing ? <ProfileForm toggleEdit={setEditing} editProfile={user.editProfile} {...props} /> : 
            <Card.Body>
                <Card.Header>Personal Details</Card.Header>
            <Card.Body>First Name: {user.fname}</Card.Body>
            <Card.Body>Last Name: {user.lname}</Card.Body>
            <Card.Body>Email: {user.email}</Card.Body>
            <Card.Body>Date of Birth {user.birthday}</Card.Body>
            <Card.Header>RGB account...</Card.Header>
            <Card.Body>Postal Code: {user.postal_code}</Card.Body>
            <Card.Header>Change Password</Card.Header>
            <Card.Body>Current Password: {user.password}</Card.Body>
            <Card.Body>New Password: {user.password}</Card.Body>
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