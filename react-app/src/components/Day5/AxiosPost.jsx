import axios from 'axios';
import React,{useEffect, useState} from 'react'

function AxiosPost() {
    const [array,setArray]=useState([]);

    const [userId1,setuserId1]=useState("")
    const [title1,settitle1]=useState("")
    const [body1,setbody1]=useState("")
    const [id1,setId1]=useState("")

    function submituser()
    {
        let value={userId1,id1,title1,body1};

        axios.post('https://jsonplaceholder.typicode.com/posts',{
          method:'POST',
          headers:{
            "Accept":'application/json',
            "Content-type":'application/json'
          },
          body:JSON.stringify(value)
          
            
            
        }).then((response)=>{
          console.log(response.data)   
          // setArray(response)
           
        })

        
    }

  return (

    <div>
    <table>
        <tr>
            <td>USER ID</td>
            <td>ID</td>
            <td>TITLE</td>
            <td>BODY</td>
        </tr>
        

        {
           
            array.map((item)=>
            <tr>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
            </tr>)
        }
      </table>
      
      
      <div>
        <h1>Input Form</h1>
      </div>

      <input type='text' value={userId1} onChange={(e)=>setuserId1(e.target.value)}/>

      <input type='text' value={id1} onChange={(e)=>setId1(e.target.value)}/>

      <input type='text' value={title1} onChange={(e)=>settitle1(e.target.value)}/>

      <input type='text' value={body1} onChange={(e)=>setbody1(e.target.value)}/>

      <button type = "submit" onClick={submituser}>Submit user</button>

    </div>
  )
}

export default AxiosPost
