import React from 'react'
import { useNavigate } from 'react-router-dom'

function Signout() {
    const navigate=useNavigate(-1)
    function checkOut()
    {
        localStorage.removeItem('login')
        navigate('/login')
        
    }
  return (
    <div>
      <button onClick={checkOut}>Signout</button>
    </div>
  )
}

export default Signout
