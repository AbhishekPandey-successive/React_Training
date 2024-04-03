// 1.Create a functional component called Counter.
// Inside the component, use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// When the user clicks on the buttons, update the count state accordingly.


import React,{useState} from 'react';
 function Counter1()
 {
    let [count,setCount]=useState(0);
    function Increement()
    {
        setCount(count++);
    }

    function Decreement()
    {
        setCount(count--);
    }
    return(
        <>
            <p>{count}</p>
            <button onClick={Increement} style={{margin:'5px'}}>Increement</button>
            <button onClick={Decreement}>Decreement</button>
        </>
    )
 }

 export default Counter1