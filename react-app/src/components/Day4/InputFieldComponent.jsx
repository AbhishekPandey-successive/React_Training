// 3.Create a component with controlled input field and a button. When the user enters a specific value into the input (e.g., "show"), a new component should be rendered below the input, displaying a message. Otherwise, nothing should be displayed.


import React,{useState} from 'react'



function InputFieldComponent() {
    const [text,setText]=useState("")
    const [showmessage,setShowMessage]=useState(false)
    const [component,setComponent]=useState("")

   function checkMessage()
   {
    if(showmessage)
    {
        setShowMessage(false)
    }
    else{
        setShowMessage(true)
    }

    setComponent(text)
    
   }
  return (
    <div>
      <input type='text' value={text} onChange={(e)=>setText(e.target.value) }/>
      <button onClick={checkMessage}> Send Message to new Component</button>
      <br/>
      {showmessage && component}
      
    </div>
  )
}

export default InputFieldComponent
