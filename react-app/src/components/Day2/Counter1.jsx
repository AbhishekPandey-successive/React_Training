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