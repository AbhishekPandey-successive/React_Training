import React,{useState,useEffect} from 'react'
import axios from 'axios'

function AxiosFetching() {
    const [array,setArray]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            setArray(response.data)
        }).catch(()=>{
            console.log("Invalid API CALL")
        })
    },[])
  return (
    <div>
      <h1>API Call</h1>
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

    
    </div>
  )
}

export default AxiosFetching

