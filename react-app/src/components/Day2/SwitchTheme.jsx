import React,{useContext, useState} from 'react'
import userContext from './Theme'

function SwitchTheme() {
    var value=useContext(userContext)
    const [bg,setBg]=useState(value)
    function changeTheme()
    {
        if(value==="white")
        {
            value="black"
        }
        else{
            value="white"
        }
        setBg(value)
    }
  return (
    <div style={{backgroundColor:bg,height:"400px"}}>

    <button onClick={changeTheme}>Toggle the theme</button>
      
    </div>
  )
}

export default SwitchTheme
