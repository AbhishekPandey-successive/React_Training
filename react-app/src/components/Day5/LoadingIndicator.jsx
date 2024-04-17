// Add a loading indicator (e.g., a spinner) to the component. Display it while the data is being fetched and hide it once the data is loaded.
// import { formGroupClasses } from '@mui/material'

import React,{useEffect, useState} from 'react'
import Spinner from './Spinner'

function LoadingIndicator() {
    const [array,setArray]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        setInterval(()=>{

            fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
                response.json().then((result)=>{
                    setArray(result)
                })
            }).catch(()=>{
                console.log("Error Arrived")
            }).finally(()=>{
                setLoading(false)
            })


        },10000)
        
    },[])
  return (
    <div>
    <h1>API Call</h1>

    {loading? (<Spinner/>) :(
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
    </table>)}

      
    </div>
  )
}

export default LoadingIndicator
