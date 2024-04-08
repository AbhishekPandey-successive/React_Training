import React,{useState} from 'react'

function Registration() {
    const [pass1,setpass1]=useState("")
    const [pass2,setpass2]=useState("")
    const [auth,setAuth]=useState(false)

    function authenticationCheck(e)
    {
        e.preventDefault()

        if(pass1===pass2)
        {
            setAuth(true)
        }
    }
  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={authenticationCheck}>
        <label>Password1:</label>
        <input type='password' onChange={(e)=>setpass1(e.target.value)}/>
        <br/>

        <label>Password2:</label>
        <input type='password' onChange={(e)=>setpass2(e.target.value)}/>

        <br/>
        <button type='submit'>Submit Form</button>


      </form>

      {auth &&  <p>Form is Authenticated</p>}


    </div>
  )
}

export default Registration
