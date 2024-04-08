// 1.Create a React component with an input field. Implement it as a controlled component where the input value is controlled by the component's state. When the user types into the input field, the component's state should update accordingly.


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
