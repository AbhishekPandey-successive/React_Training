// 4.Create a functional component called RandomNumberGenerator.
// Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
// Render the current value of randomNumber.
// Add a button that generates a new random number and updates the state when clicked
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
