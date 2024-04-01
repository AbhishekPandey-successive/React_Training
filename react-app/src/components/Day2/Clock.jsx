import React,{useState,useEffect} from 'react'

function Clock() {
    const [time,setTime]=useState(new Date().toLocaleTimeString())
    useEffect(()=>{
        let interval=setInterval(()=>{
            setTime(new Date().toLocaleTimeString())

        },1000)

        return ()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div>
      <p>Current Time : {time}</p>
    </div>
  )
}

export default Clock




