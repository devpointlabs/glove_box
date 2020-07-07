import React, { useState, useEffect } from "react";
import { Button, Form, } from "react-bootstrap"
import axios from "axios";

const ProfileForm = (props) => {
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [birthday, setBirthday] = useState("")
  const [postal_code, setPostal] = useState("")
  const [password, setPassword] = useState("")
  const profile = { first_name: first_name, last_name: last_name, email: email, 
    birthday: birthday, postal_code: postal_code, password: password  }

  useEffect(() => {
    if (props.id) {
      setFirstName(props.first_name)
      setLastName(props.last_name)
      setEmail(props.email)
      setBirthday(props.birthday)
      setPostal(props.postal)
      setPassword(props.password)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.editProfile) {
      props.editProfile(props.id, profile)
      props.toggleEdit()
    } else {
    axios.post("/api/profile", { first_name, last_name, email, birthday, postal_code, password })
      .then(res => {
        props.addProfile(res.data)
        props.toggleForm();
      })
    }
  };

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
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Form.Control
          placeholder="Date of Birth"
          name="Date of Birth"
          required
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <br />
        <h3>Connect to your RBC account</h3>
        <hr />
        <Form.Control
          placeholder="Postal Code"
          name="Postal Code"
          required
          value={postal_code}
          onChange={(e) => setPostal(e.target.value)}
        />
        <br />
        <h1>Change Password</h1>
        <hr />
        <Form.Control
          placeholder="Current Password"
          name="Current Password"
        //   required
        //   value={password}
        //   onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Form.Control
          placeholder="Type New Password"
          name="Type New Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button type="submit">Save Changes</Button>
        <br />
        <br />
      </Form>
    </>
  )
};

export default ProfileForm;

