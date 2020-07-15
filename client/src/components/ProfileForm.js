import React, { useState, useEffect, useContext } from "react"
import { Button, Form, } from "react-bootstrap"
import axios from "axios"

import {AuthContext} from '../providers/AuthProvider'


const ProfileForm = () => {
  const user = useContext(AuthContext) //This gives us global access to the user

  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [birthday, setBirthday] = useState("")
  const [postal_code, setPostal] = useState("")
  const [password, setPassword] = useState("")

  const profile = {
    first_name,
    last_name,
    email,
    birthday,
    postal_code,
    password,
  }

  useEffect(() => {
    if (user.id) {
      setFirstName(user.first_name)
      setLastName(user.last_name)
      setEmail(user.email)
      setBirthday(user.birthday)
      setPostal(user.postal)
      setPassword(user.password)
    }
  }, [user.id, user.first_name, user.last_name, user.email, user.birthday, user.postal, user.password])

  const handleSubmit = (e) => {
    // prevent refresh
    e.preventDefault()

    // TODO: Make sure endpoint is correct
    // end point that should update user info
    axios.put("/api/profile", {id: user.id, first_name, last_name, email, birthday, postal_code, password}) //Post = create new, Put = replaces known values
      .then(res => {
        // update auth context means update global state
        user.handleUpdatePersonalInfo(profile)
      })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
      <Form.Label>Personal Details </Form.Label>
      <hr />
        <Form.Control
          placeholder="First Name"
          name="first name"
          require
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <Form.Control
          placeholder="Last Name"
          name="last name"
          require
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <Form.Control
          placeholder="Email"
          name="email"

          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Form.Control
          placeholder="Date of Birth"
          name="Date of Birth"

          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <br />
        <h3>Connect to your RBC account</h3>
        <hr />
        <Form.Control
          placeholder="Postal Code"
          name="Postal Code"

          value={postal_code}
          onChange={(e) => setPostal(e.target.value)}
        />
        <br />
        <h1>Change Password</h1>
        <hr />
        <Form.Control
          placeholder="Current Password"
          name="Current Password"
        
        //   value={password}
        //   onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Form.Control
          placeholder="Type New Password"
          name="Type New Password"

          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button type="submit" > 
          Save Changes</Button>
        
    
          
        <br />
        <br />
      </Form>
    </>
  )
};

export default ProfileForm;



// onClick={this.toggleEdit}>
// <div>
{/* <Button icon color="blue" onClick={this.toggleEdit}>
<Icon name="pencil" />
</Button>
<Button icon color="red">
<Icon name="trash" />
</Button> */}
