import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    
    const[name,setname]=useState("")
    const[password,setPassword]=useState("")
    

   
    

    function login()
    {
      
        if(name==="Abhishek" && password==="12345")
        {
            localStorage.setItem("login",true)
        }
        
            localStorage.getItem('login')? Navigate('/home') :Navigate('/login')
            
          


     }


    const Navigate=useNavigate(-1)
    

    
    
  return (
    <div>
      <input  type='text' placeholder='enter name' onChange={(e)=>{setname(e.target.value)}}/>
      <input type='password' placeholder='enter password' onChange={(e)=>{setPassword(e.target.value)}}/>
      <button onClick={login}>loggin</button>
      

    </div>
  )
}

export default Login
