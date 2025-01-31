// 6.Create a functional component called Clock.
// Use the useState hook to manage a state variable named time initialized to the current time.
// Use the useEffect hook to update the time state every second to display the current time.
// Render the current time in a <p> element.
// When the component unmounts, clear the interval to stop updating the time.

import React,{useState,useEffect} from 'react'

function Clock() {
    const [time,setTime]=useState(new Date().toLocaleTimeString())
    useEffect(()=>{
      console.log("hi")
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




