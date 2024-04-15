import React, { useState } from 'react'

function Modal1() {
    const[status,setStatus]=useState(false)
   
  return (
    <div>
     
     <button onClick={()=>setStatus(!status)}>Toggle the Modal Dialog </button>
     {
        status?alert("Dialog Box Open"):alert("Dialog Box Closed")
     }
      
    </div>
  )
}

export default Modal1
