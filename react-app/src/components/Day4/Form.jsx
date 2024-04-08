import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState("");
    const [checkbox,setCheckbox]=useState(false)
    const [gender,setGender]=useState("")

    function renderFormData(e)
    {
        e.preventDefault()
        console.log(name)

        if(checkbox===true)
        {
            console.log("Checkboax is Clicked")
        }
        else{
            console.log("Checkbox is Nor Clicked")
        }

        if(gender==="Male")
        {
            console.log("Male")
        }

        else{
            console.log("Female")
        }
    }
    

  return (
    <div>

      <form onSubmit={renderFormData}>
      
      <label>
    Name:<input type="text" name="name"  value={name} onChange={(e)=>setName(e.target.value)}/>
      </label>

      <br/>

      <label>
    Checkox: <input type="checkbox"  value={checkbox} onChange={()=>setCheckbox(!checkbox)} />
     </label>
     <br/>

     <label>
    Male: <input type="radio"  value={gender} onChange={()=>setGender("Male")}/>
    Female: <input type="radio"  value={gender} onChange={()=>setGender("Female")}/>
     </label>

     <button type='submit'>Submit Form</button>
      </form>
    </div>
  )
}

export default Form
