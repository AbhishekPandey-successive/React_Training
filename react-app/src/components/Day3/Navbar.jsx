import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
     <ul style={{display:'flex',justifyContent:'center',border:'2px solid black'}}>
        <li style={{textDecoration:'none'}}><Link to='/home' style={{margin:'20px',textDecoration:'none'}}>Home</Link></li>
        <li style={{textDecoration:'none'}}><Link to='/about' style={{margin:'20px',textDecoration:'none'}}>About</Link></li>
        <li style={{textDecoration:'none'}}><Link to='/dashboard' style={{margin:'20px',textDecoration:'none'}}>DashBoard</Link></li>


        <li style={{textDecoration:'none'}}><Link to='/user/1' style={{margin:'20px',textDecoration:'none'}}>item1</Link></li>
        <li style={{textDecoration:'none'}}><Link to='/user/2' style={{margin:'20px',textDecoration:'none'}}>item2</Link></li>
        <li style={{textDecoration:'none'}}><Link to='/user/3' style={{margin:'20px',textDecoration:'none'}}>item3</Link></li>




      
        
    
        
    
    
     </ul>
      
     </div>
  )
}

export default Navbar
