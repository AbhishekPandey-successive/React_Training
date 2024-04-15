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
