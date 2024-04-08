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
