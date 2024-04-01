import React,{useState} from 'react'

function RandomNumberGenerator() {
    const [random,setRandomNumber]=useState(Math.random()*100)
    function generateRandomNum()
    {
        setRandomNumber(Math.random()*100)
    }
  return (
    <div>
      <h1>Random Number : {random}</h1>
      <button onClick={generateRandomNum}>Generate the Random Number</button>
    </div>
  )
}

export default RandomNumberGenerator
