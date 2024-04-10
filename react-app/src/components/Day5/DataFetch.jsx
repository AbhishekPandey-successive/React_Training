// 1.Create a React component that fetches data from a public API (e.g., JSONPlaceholder) and displays it on the page. Use the fetch function to make the request.


import React,{useEffect, useState} from 'react'

function DataFetch() {
    const [array,setArray]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            response.json().then((result)=>{
                setArray(result)
            })
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
      
    </div>
  )
}

export default DataFetch
