import React from 'react'

export default function Dashboard() {

    defaultImage = 'https://lh3.googleusercontent.com/proxy/pBC2-MR-kzg4iZ5V20cIW587JBKPTLsVmJdOn2_r0uGz4HW9-RydVgiBArCoFJNkbErN3vhINBcG6ig0TsicqMSbZeLno75L_7-423rpeZA56mhgSMtzqRWi'
    
    return (
        <div>
            <div style={styles.contain}>
                <h1>Dashboard</h1>

                <h3>CAR DETAILS</h3>
                <div>{defaultImage}<div></div></div>
            </div>
        </div>
    )
}

const styles = {
    contain: {
        maxWidth: '60%'
    }
}