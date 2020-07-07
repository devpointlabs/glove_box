import React, {useState} from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit',{ email, password })
       //TODO: add axios call to devise method we dont have yet
    }
    
    return (
        <div style={styles.formDiv}>
        <form title='Register' onSubmit={handleSubmit} style={styles.vertForm}>
            <h1>Register</h1>
            <label for='email'>Email</label>
            <input type='text' label='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label for='password'>Password</label>
            <input type='text' label='password' name='password' value={password} onChange={(e)=> setPassword(e.target.value) }/>
            <button style={styles.buttonStyle}>Submit</button>
        </form>
    </div>
    )
}

const styles = {
    vertForm: {
        display: 'flex',
        flexDirection: 'column',
        // maxWidth:'70%',
    },
    formDiv: {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        justifyContent:'center'
    },
    buttonStyle: {
        maxWidth: '50%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'10px',
    }
}
