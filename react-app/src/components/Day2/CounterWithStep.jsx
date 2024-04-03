// 5.Create a functional component called CounterWithStep.
// Use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// Add an input field where the user can specify 5a step value.
// Update the count using the specified step value when the buttons are clicked.
import React,{useState} from 'react'

function CounterWithStep() {
    const [count,setCount]=useState(0);
    const [step,setStep]=useState(0);
    function updateStep(e)
    {
        const value=parseInt(e.target.value,10)
        setStep(value)
    }

    function IncreaseValue()
    {
      setCount(count+step)
    }

    function DecreaseValue()
    {
      setCount(count-step)
    }
  return (
    <div>
       <p>count:{count}</p>
       <input type='number' placeholder='Enter the step Value'  onChange={updateStep}/>
       <button onClick={IncreaseValue}>Increement</button>
       <button onClick={DecreaseValue}>Decreement</button>
    </div>
  )
}

export default CounterWithStep
