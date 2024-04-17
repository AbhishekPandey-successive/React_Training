// Create a React component (Modal) that displays a modal dialog with content. Users can open and close the modal. Write tests to check if the modal opens and closes when triggered.


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
