import React from 'react'

export default function Footer() {
    return (
        <div style={styles.bar}>
            <p><span>&#169;</span> 2020 DevPoint Studio LLC</p>
        </div>
    )
}

const styles = {
    bar: {
        backgroundColor:'black',
        color:'white',
        minHeight:'40px',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
    }
}