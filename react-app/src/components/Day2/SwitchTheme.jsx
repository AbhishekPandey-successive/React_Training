import React,{useContext,useState} from 'react'
import { theme } from './Theme'

function SwitchTheme() {
    const bg=useContext(theme)
    const [status,setStatus]=useState(bg)

    function changeTheme()
    {
        bg=='white'?bg='dark':bg='light'
    }
  return (
    <div>
    <button onClick={changeTheme}>Toggle the Theme</button>
      
    </div>
  )
}

export default SwitchTheme
