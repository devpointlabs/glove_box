import React, { useState, useEffect, useContext } from "react"
import { Button, Form, } from "react-bootstrap"
import axios from "axios"

import {AuthContext} from '../providers/AuthProvider'


const ProfileForm = () => {
  const user = useContext(AuthContext) //This gives us global access to the user

  const [fname, setFirstName] = useState("")
  const [lname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [birthday, setBirthday] = useState("")
  const [postal_code, setPostal] = useState("")
  const [password, setPassword] = useState("")

  const profile = {
    fname,
    lname,
    email,
    birthday,
    postal_code,
    password,
  }

  useEffect(() => {
    if (user.id) {
      setFirstName(user.fname)
      setLastName(user.lname)
      setEmail(user.email)
      setBirthday(user.birthday)
      setPostal(user.postal)
      setPassword(user.password)
    }
  }, [user.id, user.fname, user.lname, user.email, user.birthday, user.postal, user.password])

  const handleSubmit = (e) => {
    // prevent refresh
    e.preventDefault()

    // TODO: Make sure endpoint is correct
    // end point that should update user info
    axios.put("/api/profile", {id: user.id, fname, lname, email, birthday, postal_code, password}) //Post = create new, Put = replaces known values
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
          value={fname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <Form.Control
          placeholder="Last Name"
          name="last name"
          require
          value={lname}
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


        <h1>Communication Preferences</h1>
        <hr/>
        <p>Get recall notifications and exclusive offers - all to your inbox. Unsubscribe from promotional email at any time.</p>
        <p>If you wish to contact us about your consent, please email us at hello@talktodrive.com</p>








        <Button type="submit" > 
          Save Changes</Button>
          <br></br>
          <Button type="danger" > 
          Delete Account</Button>
    
          
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
