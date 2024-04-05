import React from 'react'
import { useParams } from 'react-router-dom'



function User() {

    const productList=[{id:1,name:"Abhishek"},{id:2,name:"Nitesh"},{id:3,name:"Neha"}]
    const{id}=useParams()
    
    
    return (
    <div>
      <h1>item  name: {productList[id-1].name}</h1>
      <h1>item  id: {productList[id-1].id}</h1>
      
    </div>
  )
}

export default User
