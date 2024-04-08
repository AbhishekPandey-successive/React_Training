import React,{useState} from 'react'

function ControlledComponent() {
    const [name,setName]=useState("")
  return (
    <div>
       {name}
       <br/>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter the text' />
    </div>
  )
}

export default ControlledComponent
