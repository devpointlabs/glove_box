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
                <p><strong>PUBLIC SAFETY.</strong> If your vehicle is not moveable, is blocking a major roadway, and the police are needed to direct traffic so that a second collision does not occur, police should be called. A collision ina  parking lot or on a residential street, does not meet this criteria. A collision on a busy road, at the crest of a hill, or around a blind curve, are collisions that the police should attend to make sure taht a second collision does not occur.</p>        
                <p><strong>Question: Are you blocking traffic?</strong></p>
                <p>When it is safe, move your vehicle to the side of the road. out of traffic. If your vehicle cannot be driven. turn on your hazard lights or use cones, warning triangles or flares, as appropriate. </p>
                <p><strong>Question: What information do I need to get from the other Driver?</strong></p>
                <p>Record the following information; You may use your cell phone to audio record as much information as possible
                General Information 
                Other Drivers Information
                Date /time 
                Location 
                Weather conditions 
                Road Conditions 
                Estimated Speed of Vehicle(s) 
                Description of Accident 
                Diagram of Accident 
                Witness Info 
                Police Officer Info
                Tow Truck Info 
                Name 
                Address 
                Phone 
                License Plate 
                Drivers' License No. 
                Vehicle Make, Model and Color 
                VIN 
                Registered Owner of Vehicle 
                Insurance Co. Name. Policy No., Expiration Date 
                Damage toVehicle </p>
                <p><strong>Question: Is This damage covered under insurance?</strong></p>
                <p>Call your insurance company as soon as possible after the accident. Inform thorn what happened and ask for next steps.</p>
                <p><strong>Question: How can I be prepared for any emergency on the road </strong></p>
                <p>Always keep a basic vehicle first aid or emergency kit in the trunk of your vehicle. You can easily create an emergency kit for your vehicle by filling a plastic storage container with the following: 
                pen and paper; 
                a basic first aid kit;
                a disposable camera; 
                emergency road flares, warning triangles or cones;
                a fire extinguisher (A-B-C Type);
                a flashlight and extra batteries; 
                bottled water; 
                booster cables; 
                a tire repair kit and pump; 
                a small tool kit; 
                a towel; 
                a pair of work gloves; 
                some type of non-perishable food;
                hand wipes; 
                and a thermal blanket</p>
            </div>
        </div>
    )
}

const styles={
    layout: {
        display: 'flex',
        justifyContent:'center',
        width:'100wv',
        height:'auto',
    }
}