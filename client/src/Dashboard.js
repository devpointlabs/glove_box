import React from 'react'

export default function Dashboard() {
    return (
        <div>
            <div style={styles.contain}>
                <h1>Dashboard</h1>

                <h3>CAR DETAILS</h3>
                <div></div>
            </div>
        </div>
    )
}

const styles = {
    contain: {
        maxWidth: '60%'
    }
}