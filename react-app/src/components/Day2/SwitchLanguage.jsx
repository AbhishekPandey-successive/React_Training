import React,{useContext,useState} from 'react'
import userContext from './Language'

function SwitchLanguage() {
    const [Lang,setLang]=useState("English")
    var valueFromContext=useContext(userContext)
    function updateLanguage()
    {
        if(valueFromContext==="English")
        {
            valueFromContext="Spanish"
        }
        else{
            valueFromContext="English"
        }
        setLang(valueFromContext)
    }
  return (
    <div>
     <h1>Current Language : {Lang}</h1>
     <button onClick={updateLanguage}>Switch The Language</button>
      
    </div>
  )
}

export default SwitchLanguage
