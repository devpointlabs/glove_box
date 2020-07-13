import React from 'react'

export default function Dashboard() {

    const defaultImage = 'https://lh3.googleusercontent.com/proxy/pBC2-MR-kzg4iZ5V20cIW587JBKPTLsVmJdOn2_r0uGz4HW9-RydVgiBArCoFJNkbErN3vhINBcG6ig0TsicqMSbZeLno75L_7-423rpeZA56mhgSMtzqRWi'
    
    return (
        <div style={styles.page}>
            <div style={styles.contain}>
                <h1 style={{textAlign:'left', fontSize:'50px'}}>Dashboard</h1>

                <h3 style={{textAlign:'left', color:'#A7AAB2', fontSize:'30px', marginBottom:'30px'}}>CAR DETAILS</h3>
                <div style={styles.card}>
                    <img src={defaultImage} style={{width:'50%'}}/>
                    <div style={styles.right}>
                        <h1 style={{fontSize:'40px'}}><strong>Add Title Here</strong></h1>
                        <h3>Unlock your vehicles estimated trade-in value and up-to-date recalls when you add your liscense plate.</h3>
                        <button style={styles.buttonStyle}><strong>ADD LISCENSE PLATE</strong></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    contain: {
        maxWidth: '60%',
        
    },
     page: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
     },
     card: {
        minHeight: '40%',
        width:'90%',
        display: 'flex',
        border: '2px solid white',
        borderRadius: '10px',
        boxShadow: '1px 1px 6px 5px #eeeeee'
     },
     right: {
         display: 'flex',
         flexDirection: 'column',
         justifyContent:'space-around',
         minWidth: '45%',
         maxWidth:'50%',
         padding: '20px 60px',
         backgroundColor: 'white',
     },
     buttonStyle: {
         all: 'unset',
         maxWidth: '50%',
         padding: '20px 15px',
         color: 'white',
         backgroundColor: 'black',
         borderRadius: '5px',
         marginLeft: 'auto',
         marginRight: 'auto',
     }
}