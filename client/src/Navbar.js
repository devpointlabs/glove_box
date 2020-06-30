import React from 'react'
import {Menu} from 'semantic-ui-react'

export default function Navbar() {

    const authenticated = true

    const rightMenuItems = () => {
        if(authenticated){
            return(
                <Menu.Menu position='right'>
                    <Menu.Item name='logout'/>
                </Menu.Menu>
            )
        }else{
           return( <Menu.Menu position='right'>
                        <Menu.Item name='login'/>
                        <Menu.Item name='register'/>
                    </Menu.Menu>
           )
        }
    }

    return (
      <Menu>
          <Menu.Item name='home'/>
          <Menu.Item name='my vehicles'/>
          <Menu.Item name='my records'/>
          {rightMenuItems()}
      </Menu>
    )
}
