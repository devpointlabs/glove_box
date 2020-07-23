import React, { useState, useEffect, useContext } from "react"
import { Button, Form, } from "react-bootstrap"
import axios from "axios"

import useWindowSize from '../hooks/useWindowSize'

import {AuthContext} from '../providers/AuthProvider'


const ProfileForm = () => {
  const {user, handleUpdatePersonalInfo} = useContext(AuthContext)
  
  const [windowWidth, ,bps] = useWindowSize()

  const [fname, setFirstName] = useState("")
  const [lname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [birth_date, setBirthday] = useState("")
  const [postal_code, setPostal] = useState("")
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [isChecked, setIsChecked] = useState(false)

  const profile = {
    fname,
    lname,
    email,
    birth_date,
    postal_code,
    oldPassword,
  }

  useEffect(() => {
    if (user.id) {
      setFirstName(user.fname)
      setLastName(user.lname)
      setEmail(user.email)
      setBirthday(user.birth_date)
      setPostal(user.postal)
    }
  }, [user.id, user.fname, user.lname, user.email, user.birth_date, user.postal])

  const handleSubmit = (e) => {
    e.preventDefault()

    const updatedUser = {id: user.id}

    if (fname) {
      updatedUser.fname = fname
    }
    
    if (lname) {
      updatedUser.lname = lname
    }
    
    if (email) {
      updatedUser.email = email
    }
    
    if (birth_date) {
      updatedUser.birth_date = birth_date
    }

    if (postal_code) {
      updatedUser.postal_code = postal_code
    }

    if (oldPassword && newPassword) {
      // * implement verifcation of oldpassword in backend
      // updatedUser.oldPassword = oldPassword
      // updatedUser.newPassword = newPassword

      // * meanwhile
      updatedUser.password = newPassword
    }

    axios
      .put(`/api/users/${user.id}`, updatedUser) //Post = create new, Put = replaces known values
      .then(res => handleUpdatePersonalInfo(profile))
  }

  const actualWidthSize = windowWidth > bps.md ? '40%' : '90%'

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '30px',
      marginBottom: '30px',
    }}>
    <div style={{
      width: actualWidthSize,
      maxWidth: actualWidthSize,
      border: 'solid black 1px',
      padding: '20px',
    }}>
      <Form onSubmit={handleSubmit}>
        <div style={{display: 'flex', justifyContent: 'start', marginBottom: '30px'}}>
          <h1><b>Account Settings</b></h1>
          <hr />
        </div>
        <div style={{display: 'flex', justifyContent: 'start'}}>
          <h3>Personal Details</h3>
        </div>
        <hr />
        <Form.Row>
          <div style={{
            width: '50%',
            paddingRight: '5px'
          }}>
            <div style={{display: 'flex', justifyContent: 'start'}}>
              <label>First Name</label>
            </div>
            <Form.Control
              placeholder="First Name"
              name="first name"
              required
              value={fname}
              onChange={(e) => setFirstName(e.target.value)}
              />
          </div>
          <div style={{
            width: '50%',
            paddingLeft: '5px'
          }}>
            <div style={{display: 'flex', justifyContent: 'start'}}>
              <label>Last Name</label>
            </div>
            <Form.Control
              placeholder="Last Name"
              name="last name"
              required
              value={lname}
              onChange={(e) => setLastName(e.target.value)}
              />
          </div>
        </Form.Row>
        <br />
        <Form.Row>
          <div style={{
            width: '50%',
            paddingLeft: '5px'
          }}>
            <div style={{display: 'flex', justifyContent: 'start'}}>
              <label>Email</label>
            </div>
            <Form.Control
              placeholder="Email"
              name="email"

              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div style={{
            width: '50%',
            paddingLeft: '5px'
          }}>
            <div style={{display: 'flex', justifyContent: 'start'}}>
              <label>DOB</label>
            </div>
            <Form.Control
              placeholder="2020/01/01"
              name="Date of Birth"
              // type='datetime'
              value={birth_date}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
        </Form.Row>
        <br />
        <Form.Row>
          <div style={{
            width: '50%',
            paddingLeft: '5px'
          }}>
            <label style={{display: 'flex', justifyContent: 'start'}}>Connect to your RBC account</label>
            <Form.Control
              placeholder="Postal Code"
              name="Postal Code"

              value={postal_code}
              onChange={(e) => setPostal(e.target.value)}
            />
          </div>
        </Form.Row>
        <br />
        <div>
          <h3 style={{display: 'flex', justifyContent: 'start'}}>Change Password</h3>
        </div>
        <hr />
        <Form.Row>
          <div style={{
              width: '50%',
              paddingRight: '5px'
            }}>
              <div style={{display: 'flex', justifyContent: 'start'}}>
                <label>Current Password</label>
              </div>
            <Form.Control
              placeholder="Current Password"
              name="Current Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <br />
          <div style={{
              width: '50%',
              paddingRight: '5px'
            }}>
              <div style={{display: 'flex', justifyContent: 'start'}}>
                <label>New Password</label>
              </div>
            <Form.Control
              placeholder="Type New Password"
              name="Type New Password"

              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </Form.Row>
        <br />
        <div style={{display: 'flex', justifyContent: 'start'}}>
          <h3>Communication Preferences</h3>
        </div>
        <hr/>
        <div data-name='container'>
          <section style={{display: 'flex', flexDirection: 'row', marginBottom: '14px'}}>
            <div style={{marginRight: '10px', marginTop: '10px'}}>
              <input
                type="checkbox"
                id="check-box"
                name="CommunicationPref" 
                value={isChecked} 
                onChange={() => setIsChecked(!isChecked)}
              />
            </div>
            <div style={{textAlign: 'left'}}>
              Get recall notifications and exclusive offers - all to your inbox. Unsubscribe from promotional email at any time.
            </div>
          </section>
          <section style={{textAlign: 'left'}}>
            If you wish to contact us about your consent, please email us at hello@talktodrive.com
          </section>
        </div>
        <hr style={{marginTop: '30px', marginBottom: '30px'}}/>
        <Button variant="secondary" style={{backgroundColor: 'black', width: '30%'}}> 
          Save Changes
        </Button>
        <br/>
        <br/>
        <Button variant="danger"> 
          Delete Account
        </Button>
        <br />
      </Form>
    </div>
    </div>
  )
};

export default ProfileForm;



