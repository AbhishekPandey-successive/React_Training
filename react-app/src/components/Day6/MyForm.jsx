// You are given a simple form component (LoginForm) that contains input fields for username and password, as well as a submit button. Create test cases to verify that the form fields can be filled, and the submit button works correctly.


import React, { useState } from 'react'

function MyForm() {
    const [Username,setUserName]=useState("")
    const[Password,setPassword]=useState("")
    function submituser()
    {
        alert(Username,Password)
    }
  return (
    <div>
        <label>
        Username:<input type="text" name="Username"  onChange={(e)=>setUserName(e.target.value)}/>
      </label>
      <label>
        Password:<input type="password" name="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </label>
      <input type="submit" onClick={submituser} />
    </div>
  )
}

export default MyForm
