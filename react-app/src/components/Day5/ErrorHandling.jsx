// 2.Implement error handling for the fetch request. Display an error message if the request fails and provide a way for the user to retry the request.


import React,{useEffect, useState} from 'react'

function ErrorHandling() {
    const [array,setArray]=useState([])
    const [error,setError]=useState(false)
    const [url,setUrl]=useState('https://jsonplaceholder.typicodeeeeesd.com/posts')
    useEffect(()=>{
        fetch(url).then((response)=>{
            response.json().then((result)=>{
                setArray(result)
            })
        }).catch(()=>{
            setError(true)
        })
    })
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

    {error && <button onClick={()=>setUrl('https://jsonplaceholder.typicode.com/posts')}>INVALID API, Move to Correct API</button>}
      
    </div>
  )
}

export default ErrorHandling
