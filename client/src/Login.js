import React from 'react'

export default function Login() {
    return (
        <div style={styles.formDiv}>
        <form title='Register' onSubmit={handleSubmit} style={styles.vertForm}>
            <h1>Register</h1>
            <label for='name'>Name</label>
            <input type='text' label='name' name='name' value={name} onChange={(e)=> setName(e.target.value) }/>
            <label for='email'>Email</label>
            <input type='text' label='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label for='password'>Password</label>
            <input type='text' label='password' name='password' value={password} onChange={(e)=> setPassword(e.target.value) }/>
            <label for='passwordConf'>Password Confirmation</label>
            <input type='text' label='passwordConf' name='passwordConf' value={passwordConf} onChange={(e)=> setPasswordConf(e.target.value) }/>
            <button style={styles.buttonStyle}>Submit</button>
        </form>
    </div>
    )
}
