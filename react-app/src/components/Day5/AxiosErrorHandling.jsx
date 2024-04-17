import React,{useState,useEffect} from 'react'
import axios from 'axios'

function AxiosErrorHandling() {
    const [array,setArray]=useState([])
    const [error,setError]=useState(false)
    const [url,setUrl]=useState('https://jsonplaceholder.typicodeeee.com/posts')
    useEffect(()=>{
        axios.get(url).then((response)=>{
            setArray(response.data)
        }).catch(()=>{
            setError(true)
        })
    },)
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

    {error && <button onClick={()=>setUrl('https://jsonplaceholder.typicode.com/posts')}>INVALID API CALL,Move to correct Url</button>}

    
    </div>
  )
}

export default AxiosErrorHandling

