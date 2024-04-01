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
