import React from 'react'

export default function Emergency() {
    return (
        <div style={styles.layout}>
        <div style={{textAlign:'left', width:'40vw'}}>
            <h1 style={{marginBottom:'1em', whiteSpace:'nowrap'}}><strong>What to do after an auto accident</strong></h1>
            <p><strong>Question: I'm in an accident. What should I do?</strong></p>
            <p>STEP 1 Stop. If your vehicle is involved in an accident and you dont stop, you may be subject to criminal prosecution</p>
            <p>STEP 2 If it is safe to do so, get out of your car. If you have access to a digital camera or a cell phone, you should use it to take pictures of the scene.</p>
            <p>Remember</p>
            <p>As difficult as it may seem, it is importatnt that you remain calm. Do not argue with other drivers and passengers. Save your story for the police. <br/> Do not voluntarily assume liability or take responsibility, sign statements regarding fault, or promise to pay for damage at the scene of the accident. Be watchful for unauthorized tow truck operators.</p>
            <p><strong>Question: Do I need to call the police?</strong></p>
            <p>Call the police if collisions meet at least one of the following criteria:</p>
            <p><strong>SERIOUS INJURY or DEATH.</strong> Someone has been injured and taken to a hospital (usually via ambulance), or someone has died. Minor injries (cuts, scrapes, bruises, etc), or tissue damage (whiplash,etc), are not serious injuries in the purview of police response. We encourage people to get medical treatment at a later time.</p>
            <p><strong>CRIME.</strong> a Criminal offence has been committed. Impared driving, Dangerous Driving, Criminal Negligence, Police Pursuit, etc, are Criminal offences. Speeding, failing to stop for a red light and following too close are not criminal offences.</p>
        </div>
        </div>
    )
}

const styles={
    layout: {
        display: 'flex',
        justifyContent:'center',
        width:'100wv',
        height:'86vh',
    }
}