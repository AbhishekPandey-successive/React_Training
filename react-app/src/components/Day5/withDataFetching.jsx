import React,{useState,useEffect} from 'react'

function withDataFetching(OriginalComponent) {

    function NewComponent()
    {
        const [array,setArray]=useState([]);
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
                response.json().then((result)=>{
                    setArray(result)
                })
            })
        },[])
        return <OriginalComponent newarray={array}/>

    }

    return NewComponent

  
}

export default withDataFetching
